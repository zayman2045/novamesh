use anchor_lang::prelude::*;

declare_id!("Cu82DmpTFM65d5Qqja2cmW3wWnw6CmaKf7aBwt9r5UQU");

#[program]
pub mod game_reviews {
    use super::*;

    pub fn add_game_review(
        ctx: Context<AddGameReview>,
        title: String,
        description: String,
        rating: u8,
    ) -> Result<()> {
        msg!("Game review account created!");
        msg!("Title: {}", title);
        msg!("Description: {}", description);
        msg!("Rating: {}", rating);

        let game_review = &mut ctx.accounts.game_review;
        game_review.reviewer = ctx.accounts.reviewer.key();
        game_review.title = title;
        game_review.description = description;
        game_review.rating = rating;

        Ok(())
    }

    pub fn update_game_review(
        ctx: Context<UpdateGameReview>,
        title: String,
        description: String,
        rating: u8,
    ) -> Result<()> {
        msg!("Game review account space reallocated!");
        msg!("Title: {}", title);
        msg!("Description: {}", description);
        msg!("Rating: {}", rating);

        let game_review = &mut ctx.accounts.game_review;
        game_review.description = description;
        game_review.rating = rating;
        Ok(())
    }

    pub fn delete_game_review(ctx: Context<DeleteGameReview>, title: String) -> Result<()> {
        msg!("The review for {} has been deleted.", title);
        Ok(())
    }
}

#[derive(Accounts)]
#[instruction(title: String, description: String)]
pub struct AddGameReview<'info> {
    #[account(init, seeds=[title.as_bytes(), reviewer.key().as_ref()], bump, payer = reviewer, space = 8 + 32 + 1 + 4 + title.len() + 4 + description.len())]
    pub game_review: Account<'info, GameReview>,
    #[account(mut)]
    pub reviewer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction(title: String, description: String, rating: u8)]
pub struct UpdateGameReview<'info> {
    #[account(mut, seeds=[reviewer.key().as_ref(), title.as_bytes()], bump ,realloc = 8 + 32 + 1 + 4 + title.len() + 4 + description.len(), realloc::payer = reviewer, realloc::zero = true)]
    pub game_review: Account<'info, GameReview>,
    #[account(mut)]
    pub reviewer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction(title: String)]
pub struct DeleteGameReview<'info> {
    #[account(mut, close = reviewer, seeds = [reviewer.key().as_ref(), title.as_bytes()], bump)]
    pub game_review: Account<'info, GameReview>,
    #[account(mut)]
    pub reviewer: Signer<'info>,
    pub system_program: Program<'info, System>

}

#[account]
pub struct GameReview {
    pub reviewer: Pubkey,
    pub title: String,
    pub description: String,
    pub rating: u8,
}
