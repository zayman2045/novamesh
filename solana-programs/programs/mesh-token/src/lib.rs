use anchor_lang::prelude::*;

declare_id!("HBWcyyzeBN5gHSbBbk6kwCYUdKCCq2EpTF2WyucYHPan");

#[program]
pub mod mesh_token {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
