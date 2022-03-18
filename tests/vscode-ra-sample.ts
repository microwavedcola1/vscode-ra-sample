import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { VscodeRaSample } from "../target/types/vscode_ra_sample";

describe("vscode-ra-sample", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.VscodeRaSample as Program<VscodeRaSample>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
