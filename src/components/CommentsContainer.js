import React from "react";

const commentsData = [
  {
    name: "Santosh Pichai",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Santosh Pichai",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Santosh Pichai",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Santosh Pichai",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Santosh Pichai",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Santosh Pichai",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Santosh Pichai",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Santosh Pichai",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Santosh Pichai",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Santosh Pichai",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Santosh Pichai",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Santosh Pichai",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Santosh Pichai",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const {name, text, replies} = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my2">
      <img
        className="h-12 w-12"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user"
      />
      <div className="px-3">
        <p className="bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};


const CommentsList = ({ comments }) => {
  // we don't use index as key typically
  return comments.map((comment, index) => (
    <div>
      <Comment data={comment} key={index} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} key={index}/>
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments= {commentsData}/>
    </div>
  );
};

export default CommentsContainer;
