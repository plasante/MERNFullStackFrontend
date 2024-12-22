import React from 'react';
import ReactDOM from 'react-dom';
import profile1 from './image/pic-1.jpg';
import profile2 from "./image/pic-2.jpg";
import profile3 from './image/pic-3.jpg';
import SingleComment from "./SingleComment";
import './styles.css';
import UserCard from "./UserCard";

const App = () => {
  return (
    <div className={'ui comments'}>
      <UserCard>
        <div>
          Hello my name is Charlie!
        </div>
      </UserCard>
      <UserCard>
        <SingleComment
          name={'Pierre'}
          text={'Salut'}
          date={'Today at 16:00'}
          picture={profile1}
        />
      </UserCard>
      <UserCard>
        <SingleComment
          name={'Micky'}
          text={'A la revoyure'}
          date={'Today at 17:00'}
          picture={profile2}
        />
      </UserCard>
      <UserCard>
        <SingleComment
          name={'Juby'}
          text={'Est tiguidou!'}
          date={'Today at 18:00'}
          picture={profile3}
        />
      </UserCard>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));
