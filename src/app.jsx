import React, { Component } from 'react';


// function SuccessAlert() {
//   return (
//     <div className="alert alert-success">
//       <strong>Success:</strong> Total change amountDue.
//     </div>
//   );
// }

// function WarningAlert() {
//   return (
//     <div className="alert alert-danger">
//       <strong>Danger:</strong> Additional money owed.
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {

    super(props);
      this.state = {
// everything set below has the ability to change (and update props of child component if set here).
        amountDue: Number,
        amountReceived: Number,  
        totalChangeBack: Number,
        twenties: 0,
    }
//
    this.handleAmountDue = this.handleAmountDue.bind(this)
    this.handleAmountReceived = this.handleAmountReceived.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)

  }

// Below lies all of my primary functions that will act within the application.

  handleAmountDue(event) {
    this.setState({
      amountDue: event.target.value
    });

  }

  handleAmountReceived(event) {
    this.setState({
      amountReceived: event.target.value
    });

  }

  handleOnClick(event) {

    // let amountDue = this.state.amountDue;
    // let amountReceived = this.state.amountReceived;
    // let totalChange = (amountReceived - amountDue).toFixed(2);
  
    const totalChange = (this.state.amountReceived - this.state.amountDue).toFixed(2);
    this.setState ({
        totalChange: totalChange,
        twenties: Number.parseFloat((Math.floor(totalChange / 20)% 2).toFixed(2)),
        tens: Number.parseFloat(Math.floor((totalChange / 10) % 2).toFixed(2)),
        fives: Number.parseFloat(Math.floor((totalChange / 5) % 2).toFixed(2)),
        ones: Number.parseFloat(Math.floor(totalChange % 5).toFixed(2)),
        quarters: Number.parseFloat(Math.floor(((totalChange * 100) % 100) / 25).toFixed(2)),
        dimes: Number.parseFloat(Math.floor((((totalChange * 100) % 100) % 25) / 10).toFixed(2)),
        nickels: Number.parseFloat(Math.floor(((((totalChange * 100) % 100) % 25) % 10) / 5).toFixed(2)),
        pennies: Number.parseFloat(Math.floor((totalChange * 100) % 5 + 0.01).toFixed(2))

        
    })
    console.log(this.state.twenties)
    console.log(Number.parseFloat(Math.floor(this.state.totalChange.value / 20).toFixed(2)))
    event.preventDefault();

    }




  render() {
    return (

      <div className='container-fluid'>
      <h1>Change Calculator</h1>
      <hr/>

      <div className='row' class="card bg-light">
        <div className='col-sm-4'>
          <div className='card card-default'>
            <div className='card-header'>Enter Information</div>
            <p>
              <div className='card-body'>
                How Much Is Due?
                <input
                  name='amountDue'
                  className='form-control'
                  value={ this.state.amountDue }
                  onChange={ this.handleAmountDue }
                  placeholder='Amount Due'
                  type='number'
                />
              </div>
              <div className='card-body'>
                How Much Was Received?
                <input
                  name='amountReceived'
                  className='form-control'
                  value={ this.state.amountReceived }
                  onChange={ this.handleAmountReceived }
                  placeholder='Amount Received'
                  type='number'
                />
              </div>
            </p>

            <div className='card-footer'>
              <button className='btn btn-default btn-block' type='button' onClick={ this.handleOnClick }>
                Calculate
              </button>
            </div>
          </div>
        </div>

        <div className='col-sm-8'>
          <div className='card card-default'>
            <div className='card-body'>
              <div className='alert alert-success text-center lead' role='alert'>
                The Total Change Due Is ${this.state.totalChange}
              </div>
            
              <div className='row'>
                <div className='col-sm-3'>
                  <div className='well well-sm text-center'>
                    <p className='lead change'>{this.state.twenties}</p>Twenties
                  </div>
                </div>
                <div className='col-sm-3'>
                  <div className='well well-sm text-center'>
                    <p className='lead change'>{this.state.tens}</p>Tens
                  </div>
                </div>
                <div className='col-sm-3'>
                  <div className='well well-sm text-center'>
                    <p className='lead change'>{this.state.fives}</p>Fives
                  </div>
                </div>
                <div className='col-sm-3'>
                  <div className='well well-sm text-center'>
                    <p className='lead change'>{this.state.ones}</p>Ones
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-3'>
                  <div className='well well-sm text-center'>
                    <p className='lead change'>{this.state.quarters}</p>Quarters
                  </div>
                </div>
                <div className='col-sm-3'>
                  <div className='well well-sm text-center'>
                    <p className='lead change'>{this.state.dimes}</p>Dimes
                  </div>
                </div>
                <div className='col-sm-3'>
                  <div className='well well-sm text-center'>
                    <p className='lead change'>{this.state.nickels}</p>Nickles
                  </div>
                </div>
                <div className='col-sm-3'>
                  <div className='well well-sm text-center'>
                    <p className='lead change'>{this.state.pennies}</p>Pennies
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
   );
    
  }

}


export default App;
