use anchor_lang::prelude::*;

declare_id!("FnhZ2JWKJduiSniJ8xCNooTe4axyCmWH5RPEDYu9QqJr");

#[program]
pub mod mesh_nft {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
