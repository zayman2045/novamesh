// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

contract StudentIntro {
    struct Student {
        string name;
        string intro;
        address studentAddress;
        uint8 age;
    }

    mapping(address => Student) public s_students;

    function addStudent(
        string memory name,
        string memory intro,
        uint8 age
    ) public {
        require(s_students[msg.sender].studentAddress == address(0), "Student has already been added");
        s_students[msg.sender] = Student(name, intro, msg.sender, age);
    }
}
