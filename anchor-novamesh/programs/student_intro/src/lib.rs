use anchor_lang::prelude::*;

declare_id!("7MedSF1ac8fkFr5ohwjwgnr1PFAoyhXPwA7wuR1gZVrd");

#[program]
pub mod student_intro {
    use super::*;

    pub fn add_student(
        ctx: Context<AddStudent>,
        name: String,
        intro: String,
        age: u8,
    ) -> Result<()> {
        let student = &mut ctx.accounts.student;
        student.name = name;
        student.intro = intro;
        student.age = age;
        student.address = ctx.accounts.user.key();
        Ok(())
    }

    pub fn update_student(
        ctx: Context<UpdateStudent>,
        name: String,
        intro: String,
        age: u8,
    ) -> Result<()> {
        let student = &mut ctx.accounts.student;
        student.name = name;
        student.intro = intro;
        student.age = age;
        student.address = ctx.accounts.user.key();
        Ok(())
    }
}

#[derive(Accounts)]
#[instruction(name: String, intro: String)]
pub struct AddStudent<'info> {
    #[account(init, payer = user, space = 8 + 32 + 1 + 4 + name.len() + 4 + intro.len(), seeds = [name.as_bytes(), user.key().as_ref()], bump)]
    pub student: Account<'info, Student>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction(name: String, intro: String)]
pub struct UpdateStudent<'info> {
    #[account(mut,  seeds = [name.as_bytes(), user.key().as_ref()], bump, realloc = 8 + 32 + 1 + 4 + name.len() + 4 + intro.len(), realloc::payer = user, realloc::zero = true)]
    pub student: Account<'info, Student>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct Student {
    name: String,
    intro: String,
    address: Pubkey,
    age: u8,
}
