Stripe = React.createClass({

	payStripe(e){
		e.preventDefault();

    StripeCheckout.open({
      key: 'pk_test_5cc0si9qcXRamUSoEtouxpcF',
      amount: 5000, // this is equivalent to $50
      name: 'Meteor Tutorial',
      description: 'On how to use Stripe ($50.00)',
      panelLabel: 'Pay Now',
      token: function(res) {
        stripeToken = res.id;
        console.info(res);
        Meteor.call('chargeCard', stripeToken);
      }
    });
	},

	render(){
		return(
			<button onClick={this.payStripe}>Pay with Stripe</button>
			)
	}

});