import * as React from 'react';
import Button from '../../components/Button';

interface GreetingsProps {
  setGreetingsHide: void;
}

class Greetings extends React.PureComponent<any>{
  
  render() {
    return(
	    <div className="tasks-conteiner">
		    <img className="tasks-conteiner__logo" src="./empty.png" />
		    <div className="tasks-conteiner__text">
			    Запланируйте обязательные задачи на каждый день и они отобразятся здесь
		    </div>
		    <Button text="Запланировать на каждый день" onClick={this.props.setGreetingsHide}/>
		  </div>
		 );
	 }
}

export default Greetings;
