import React from 'react';
import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/esm/CardImg';


  function studentCard() {
    const cardInfo = [
        {
          image:
            "s1.png",
          name: "Mike",
          gpa: 3.8
        },
        {
          image:
            "s2.png",
            name: "Manal",
            gpa: 3.6
        },
        {
          image:
            "s3.png",
            name: "Moe",
            gpa: 3.2
        },
        {
          image:
            "s4.png",
            name: "Mary",
            gpa: 2.6
        }
      ];
      const studentCards = [];
      cardInfo.forEach(
        student => {studentCards.push(studentCardCreater(student.image, student.name, student.gpa))}
      )

      return <div>Student List{studentCards}</div>
 
  
}

function studentCardCreater(img, name, gpa){
    return<Card>
        <Card.Img src={img}></Card.Img>
        <Card.Title>Student {name}</Card.Title>
        <Card.Text>This student has a {gpa} gpa!</Card.Text>
        <button>Click this to do nothing</button>

    </Card>

}

export default studentCard

