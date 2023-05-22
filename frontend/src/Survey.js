import React, { useEffect, useState } from "react";
import axios from "axios";

function Survey() {
  const [data, setdata] = useState([{}]);
  const axiossurveydata = async () => {
    const res = await axios.get("http://localhost:8080/surveys/", {
      mode: "no-cors",
    });
    const result = res.data;
    setdata(result);
    console.log(result, " from axios");
    return result;
  };
  const surveydata = async () => {
    fetch("http://localhost:8080/finals").then(
      (response) => {
        console.log(response, "response data");
        const ResultData = response.data;
        JSON.stringify(ResultData)
        console.log(ResultData,'fetched data');
        setdata(ResultData);
        // return ResultData;
      }
   );
    console.log("hit the click");

    const res = axios
      .get("http://localhost:8080/finals/")
      .then((res) => console.log(res));
    data?.map((i) => {
      console.log(i);
    });
  };
  const Questionnaire = [
    {
      name: "Qapita",
      Questions: [
        {
          id: "1",
          description: "will you be able to attend the meetup?",
          option: "checkbox",
          options: [
            {
              optiondesc: "Looking forward to attend",
              value: "30",
            },
            {
              optiondesc: "Late",
              value: "31",
            },
            {
              optiondesc: "Stuck in Traffic",
              value: "32",
            },
            {
              optiondesc: "Not feeling well",
              value: "33",
            },
          ],
        },
        {
          id: "2",
          description: "Are you interested in this scheme?",
          option: "radio",
          options: [
            {
              
              optiondesc: "Interested",
              value: "1",
            },
            {
             
              optiondesc: "Not Interested",
              value: "2",
            },
            {
              
              optiondesc: "Need more details",
              value: "3",
            },
          ],
        },
        {
          id:"3",
          description: "How many countries are your eligible employees are located in?",
          option: "radio",
          options: [
            {
              optiondesc: "only 1 country",
              value:"4",
            },
            {
              optiondesc: "2-4 countries",
              value: "5",
            },
            {
              optiondesc: "5-10 countries",
              value: "6",
            },
            {
              optiondesc: "over 10 countries",
              value: "7",
            },
            {
              optiondesc: "Not sure",
              value: "8",
          }]
        },
            {
              id:"4",
              description: "How was your plan designed and plan documentation drafted?",
              option: "checkbox",
              options: [
                {
                  optiondesc: "In-house using templates and guides available online",
                  value:"9",
                },
                {
                  optiondesc: "via template available in an equity management software",
                }

              ]
            },
            {
              id: "5",
              description: "Add your text",
              option: "Textarea",
              options: []
              
            }
          
        

      ],
    },
  ];
  // const Questions = [
  //   {
  //     id: "1",
  //     description: "This is the first question",
  //     option: "checkbox",
  //     options: [
  //       {
  //         optiondesc: "Sad",
  //         value: "1",
  //       },
  //       {
  //         optiondesc: "happy",
  //         value: "21",
  //       },
  //     ],
  //   },
  //   {
  //     id: "1",
  //     description: "This is the second question",
  //     option: "radio",
  //     options: [
  //       {
  //         optiondesc: "Sad",
  //         value: "1",
  //       },
  //       {
  //         optiondesc: "happy",
  //         value: "45",
  //       },
  //     ],
  //   },
  // ];

  // Questions.map((question) => {
  //   console.log(question.description);
  // });

  // console.log(Questions[0].options[0].optiondesc);
  return (
    <div>
      <h2>API values</h2>
      {}

      <h1>Survey</h1>
      {Questionnaire.map((survey) => (
        <>
          <h2>{survey.name}</h2>
          {/* <h3>Form field</h3> */}
          <form>
            {
              <>
                {/* <div>
              <label>Question description</label>
              <input type="checkbox" name="name" />
              <span>check 1</span>
            </div>
            <div>
              <label>
                Question description
                <input type="checkbox" name="name" />
                <span>check 2</span>
              </label>
            </div>
            <h1>Form</h1> */}

                {/* Question 1 */}

                {survey.Questions.map((question) => (
                  <>
                    <fieldset>
                      <div>{question.description}</div>
                      <br />
                      {question.options.map((option) => (
                        question.option !== 'Textarea'?(<>
                          <label htmlFor={option.value}>
                            <input
                              type={question.option}
                              // type="radio"
                              id={option.value}
                               //name="question"
                              name = {question.id}
                              value={option.value}
                              onChange={() => {}}
                            />
                            {option.optiondesc}
                          </label>

                          <br />
                          
                        </>):(<><label htmlFor={question.option}>
                        {question.description}
                          <textarea name = {question.id} placeholder="Enter your answer"></textarea>
                          </label> </>)
                        
                      ))}

                      {/* <label htmlFor="q1-option2">
                                    <input
                                      type={question.option}
                                      id="q1-option2"
                                      name="question1"
                                      value="option 2"
                                      onChange={() => {}}
                                    />
                                    {question.options[1].optiondesc}
                                  </label>

                                  <label htmlFor="q1-option3">
                                    <input
                                      type="radio"
                                      id="q1-option3"
                                      name="question1"
                                      value="option 3"
                                      onChange={() => {}}
                                    />
                                    Option 3
                                  </label> */}
                    </fieldset>
                    <br />
                  </>
                ))}

                {/* {survey.Questions.map((question) => (
                  <div>{question.description}</div>
                ))} */}
                {/* <fieldset>
                  <div>Question 1:</div>
                  <br />
                  <label htmlFor="q1-option1">
                    <input
                      type="checkbox"
                      id="q1-option11"
                      name="question1"
                      value="option1"
                      onChange={() => {}}
                    />
                    Option 1
                  </label>

                  <label htmlFor="q1-option2">
                    <input
                      type="checkbox"
                      id="q1-option2"
                      name="question1"
                      value="option2"
                      onChange={() => {}}
                    />
                    Option 2
                  </label>

                  <label htmlFor="q1-option3">
                    <input
                      type="checkbox"
                      id="q1-option3"
                      name="question1"
                      value="option3"
                      onChange={() => {}}
                    />
                    Option 3
                  </label>
                </fieldset> */}
                <div onClick={surveydata}>
                  <p>click me</p>
                </div>
              </>
            }
            {/* <input type="submit" value="Submit" /> */}
          </form>
        </>
      ))}
      
    </div>
  );
}
export default Survey;
