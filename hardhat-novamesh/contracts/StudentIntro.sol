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
        require(
            s_students[msg.sender].studentAddress == address(0),
            "Student has already been added"
        );
        s_students[msg.sender] = Student(name, intro, msg.sender, age);
    }

    function getStudent() public view returns (Student memory) {
        require(
            s_students[msg.sender].studentAddress == msg.sender,
            "Student does not exist"
        );
        return s_students[msg.sender];
    }

    function updateStudent(
        string memory name,
        string memory intro,
        uint8 age
    ) public {
        // Check if a student with the same address already exists
        require(
            s_students[msg.sender].studentAddress == msg.sender,
            "Student does not exist"
        );

        // If the student exists, update their information
        s_students[msg.sender].name = name;
        s_students[msg.sender].intro = intro;
        s_students[msg.sender].age = age;
    }

    function removeStudent() public {
        require(
            s_students[msg.sender].studentAddress == msg.sender,
            "Student does not exist"
        );

        // If the student exists, delete their information
        delete s_students[msg.sender];
    }
}
