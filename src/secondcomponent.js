
import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';




class SecondComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: '',
      phone: '',
      city: '',
      place: {},
      
    }

  }
  handlefirstname = (e) => {
    this.setState({
      firstname: e.target.value
    })
  }



  handlecity = (e) => {
    this.setState({
      city: e.target.value
    });
  }
  handlesubmit = (e) => {
    e.preventDefault();

  }
  city = () => {
    switch (this.state.firstname) {
      case ("Pakistan"): {

        return (
          <Input type="select" onChange={this.handlecity} name="city" id="exampleSelect1">
            <option>panjab</option>
            <option>sindh</option>
            <option>kpk</option>
            <option>balochistan</option>
            <option>Gilgitbaltistan</option>
          </Input>
        )
      }
      case (''): {
        return (
          <Input type="select" onChange={this.handlecity} name="city" id="exampleSelect1">
            <option>select the country first</option>

          </Input>
        )

      }
      case ('USA'): {

        return (
          <Input type="select" onChange={this.handlecity} name="city" id="exampleSelect1">
            <option>USA1</option>
            <option>USA2</option>
            <option>USA3</option>
            <option>USA4</option>
            <option>USA5</option>
            <option>USA6</option>
          </Input>
        )


      }
      case ('China'): {

        return (
          <Input type="select" onChange={this.handlecity} name="city" id="exampleSelect1">

            <option>xering</option>
            <option>hornd</option>
            <option>bejing</option>
            <option>chxaha</option>
            <option>xhaln</option>
          </Input>
        )

      }
      default:
        {

          return (
            <Input type="select" onChange={this.handlecity} name="city" id="exampleSelect1">
              <option>select the country first</option>

            </Input>
          )
        }

    }

  }


 
  render() {


    return (
        <div> <h1>Second Component Module</h1>
      <Form onSubmit={this.handlesubmit} >

        <FormGroup>
          <Label for="examplfirstname">Country</Label>
          <Input type="select" name="firstname" onChange={this.handlefirstname} id="examplfirstname" placeholder="Please select the the country" value={this.state.firstname}>

          <option>Select country</option>
            <option>Pakistan</option>
            <option>China</option>
            <option>USA</option>
            <option>korea</option>
            <option>Japan</option>
            <option>Iran</option>
            <option>UK</option>
            <option>India</option>
            

        


          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="exampleSelect">Province</Label>
          {this.city()}
        </FormGroup>
        <FormGroup>
          <Label for="examplelastname">City</Label>
          <Input type="text" name="lastname" onChange={this.handlelastname} valid={this.state.lasttext === 'lastright'} invalid={this.state.lasttext === "lasterror"} id="examplelastname" placeholder="enter your last name" />

        </FormGroup>



       



        <Button type='submit'
        >
          Submit</Button>
      </Form>
      </div>);
  }
}


export default SecondComponent