import  React from 'react';

 interface Props {
   greeting: string;
 };

 const MyGreeting: React.FC<Props> = ({ greeting }) => {  
      return (
          <div>
             <h1>{greeting}</h1>
           </div>   
      );
};

 const App: React.FC = () => {
   const message = "Hello, world!";
   return (
     <div>
          <h2>Greeting Example:</h2>
           <MyGreeting greeting={message} />
      </div>
 );   
};

export default App;