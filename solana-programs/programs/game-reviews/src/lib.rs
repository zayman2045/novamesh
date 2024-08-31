use anchor_lang::prelude::*;
use anchor_spl::associated_token::AssociatedToken;
use anchor_spl::token::{mint_to, Mint, MintTo, Token, TokenAccount};

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

        require!(rating >= 1 && rating <= 5, GameReviewError::InvalidRating);

        let game_review = &mut ctx.accounts.game_review;
        game_review.reviewer = ctx.accounts.reviewer.key();
        game_review.title = title;
        game_review.description = description;
        game_review.rating = rating;

        mint_to(
            CpiContext::new_with_signer(
                ctx.accounts.token_program.to_account_info(),
                MintTo {
                    authority: ctx.accounts.mint.to_account_info(),
                    to: ctx.accounts.token_account.to_account_info(),
                    mint: ctx.accounts.mint.to_account_info(),
                },
                &[&["mint".as_bytes(), &[ctx.bumps.mint]]],
            ),
            10 * 10 ^ 6,
        )?;

        msg!("Minted tokens");

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

        require!(rating >= 1 && rating <= 5, GameReviewError::InvalidRating);

        let game_review = &mut ctx.accounts.game_review;
        game_review.description = description;
        game_review.rating = rating;
        Ok(())
    }

    pub fn delete_game_review(_ctx: Context<DeleteGameReview>, title: String) -> Result<()> {
        msg!("The review for {} has been deleted.", title);
        Ok(())
    }

    pub fn initialize_token_mint(_ctx: Context<InitializeMint>) -> Result<()> {
        msg!("Token mint initialized");
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
    pub token_program: Program<'info, Token>,
    #[account(seeds = ["mint".as_bytes()], bump, mut)]
    pub mint: Account<'info, Mint>,
    #[account(init_if_needed, payer = reviewer, associated_token::mint = mint, associated_token::authority = reviewer)]
    pub token_account: Account<'info, TokenAccount>,
    pub associated_token_program: Program<'info, AssociatedToken>,
    pub rent: Sysvar<'info, Rent>,
}

#[derive(Accounts)]
#[instruction(title: String, description: String, rating: u8)]
pub struct UpdateGameReview<'info> {
    #[account(mut, seeds = [title.as_bytes(), reviewer.key().as_ref()], bump ,realloc = 8 + 32 + 1 + 4 + title.len() + 4 + description.len(), realloc::payer = reviewer, realloc::zero = true)]
    pub game_review: Account<'info, GameReview>,
    #[account(mut)]
    pub reviewer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction(title: String)]
pub struct DeleteGameReview<'info> {
    #[account(mut, close = reviewer, seeds = [title.as_bytes(), reviewer.key().as_ref()], bump)]
    pub game_review: Account<'info, GameReview>,
    #[account(mut)]
    pub reviewer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct InitializeMint<'info> {
    #[account(
        init,
        seeds = ["mint".as_bytes()],
        bump,
        payer = user,
        mint::decimals = 6,
        mint::authority = mint,
    )]
    pub mint: Account<'info, Mint>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub token_program: Program<'info, Token>,
    pub rent: Sysvar<'info, Rent>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct GameReview {
    pub reviewer: Pubkey,
    pub title: String,
    pub description: String,
    pub rating: u8,
}

#[error_code]
enum GameReviewError {
    #[msg("Rating must be between 1 and 5")]
    InvalidRating,
}
