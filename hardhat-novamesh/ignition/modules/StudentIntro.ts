import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const StudentIntroModule = buildModule("StudentIntro", (m) => {
  const studentIntro = m.contract("StudentIntro", []);
  return { studentIntro };
});

export default StudentIntroModule;
