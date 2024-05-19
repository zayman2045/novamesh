import { ignition } from "hardhat";
import StudentIntroModule from "../ignition/modules/StudentIntro";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";

interface Student {
  name: String;
  intro: String;
  studentAddress: String;
  age: number;
}

describe("student intro", () => {
  const setup = async () => {
    return ignition.deploy(StudentIntroModule);
  };

  it("student added", async () => {
    const { studentIntro } = await loadFixture(setup);
    await studentIntro.addStudent("Xavier", "Hello class!", 27);
    const student: Student = await studentIntro.getStudent();
    expect(student.name).to.equal("Xavier");
    expect(student.intro).to.equal("Hello class!");
    expect(student.age).to.equal(27);
  });

  it("student updated", async () => {
    const { studentIntro } = await loadFixture(setup);
    await studentIntro.addStudent("Xavier", "Hello class!", 27);
    await studentIntro.updateStudent("Charles", "Hey it's me, Charles!", 45);
    const student: Student = await studentIntro.getStudent();
    expect(student.name).to.equal("Charles");
    expect(student.intro).to.equal("Hey it's me, Charles!");
    expect(student.age).to.equal(45);
  });

  it("student removed", async () => {
    const { studentIntro } = await loadFixture(setup);
    await studentIntro.addStudent("Xavier", "Hello class!", 27);
    await studentIntro.removeStudent();
    await expect(studentIntro.getStudent()).to.be.revertedWith(
      "Student does not exist"
    );
  });
});
