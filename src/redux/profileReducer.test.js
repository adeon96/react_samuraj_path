import React from 'react';
import profileReducer, { addPostActionCreator, deletePostAC, likePostAC } from './profileReducer';

const state = {
  myPostsData: [
    {
      id: 1,
      text: "My first post!!!",
      likes: 0
    },
    {
      id: 2,
      text: "My second post",
      likes: 0
    }
  ]
}


test('after adding post length should be incremented', () => {
  let action = addPostActionCreator("Hello");

  let newState = profileReducer(state, action);

  expect(newState.myPostsData.length).toBe(3);
});

test('after adding post text should be correct', () => {
  let action = addPostActionCreator("Hello");

  let newState = profileReducer(state, action);

  expect(newState.myPostsData[0].text).toBe("Hello");
});

test('after deleting post length should be decremented', () => {
  let action = deletePostAC(1);

  let newState = profileReducer(state, action);
  
  expect(newState.myPostsData.length).toBe(1);
});

test('after deleting post with incorrect id length should not be changed', () => {
  let action = deletePostAC(100);

  let newState = profileReducer(state, action);
  
  expect(newState.myPostsData.length).toBe(2);
});

test('after liking post its likes count should be incremented', () => {
  let action = likePostAC(2);

  let newState = profileReducer(state, action);
  
  expect(newState.myPostsData[1].likes).toBe(1);
});