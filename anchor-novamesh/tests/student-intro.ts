import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { StudentIntro } from "../target/types/student_intro";
import { expect } from "chai";

describe("student-intro", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.StudentIntro as Program<StudentIntro>;

  const student = {
    name: "Zay",
    intro: "I'm here to learn!",
    age: 27,
  };

  const [studentPDA] = anchor.web3.PublicKey.findProgramAddressSync(
    [Buffer.from(student.name), provider.wallet.publicKey.toBuffer()],
    program.programId
  );

  it("initialize student", async () => {
    const tx = await program.methods
      .addStudent(student.name, student.intro, student.age)
      .rpc();
    const account = await program.account.student.fetch(studentPDA);
    expect(account.address.toBase58()).to.equal(
      provider.wallet.publicKey.toBase58()
    );
    expect(account.name).to.equal(student.name);
    expect(account.intro).to.equal(student.intro);
    expect(account.age).to.equal(student.age);
  });

  it("update student", async () => {
    const newStudent = {
      intro: "Hey hi hello",
      age: 45,
    };
    const tx = await program.methods
      .updateStudent(student.name, newStudent.intro, newStudent.age)
      .rpc();
    const account = await program.account.student.fetch(studentPDA);
    expect(account.name).to.equal(student.name);
    expect(account.age).to.equal(newStudent.age);
    expect(account.intro).to.equal(newStudent.intro);
    expect(account.address.toBase58()).to.equal(provider.wallet.publicKey.toBase58())
  });

  it("remove student", async () => {
    const tx = await program.methods.removeStudent(student.name).rpc();
  })
});
