import React from "react";

class Billing extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            address: '',
            zipcode: '',
            city: '',
            country: '',

        isCopy: false,

        shipping: {
            address: '',
            zipcode: '',
            city: '',
            country: '',
        },
    }
    }

    copyBilling = ({ target }) => {
        if (target.checked) {
            this.setState({ isCopy: true });
            this.state.shipping.address = this.state.address;
            this.state.shipping.zip = this.state.zip;
            this.state.shipping.city = this.state.city;
            this.state.shipping.country = this.state.country;
        } else {
            this.setState({ isCopy: false });
            this.state.shipping.address = '';
            this.state.shipping.zip = '';
            this.state.shipping.city = '';
            this.state.shipping.country = '';
        }
    };
    
    handleShipping = (event) => {
        let name = event.target.name;
        this.setState = {
            [name]: event.target.value,
        };
    };

    handleBilling = ({ target }) => {
        let name = target.name;
        this.setState({
            shipping: {
                [name]: target.value,
            },
        });
        };
    
    render() {
        return (
        <>
            <h1>Learning about Forms</h1>
            <section>
                <div>
                    <h2>Shipping Address</h2>
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        name="address"
                        onChange={this.handleShipping}
                        value={this.state.address}
                    />
                    <label htmlFor="zipcode">ZIP/Postal Code</label>
                    <input
                        type="text"
                        name="zipcode"
                        onChange={this.handleShipping}
                        value={this.state.zipcode}
                    />
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        name="city"
                        onChange={this.handleShipping}
                        value={this.state.city}
                    />
                    <label htmlFor="country">Country</label>
                    <input
                        type="text"
                        name="country"
                        onChange={this.handleShipping}
                        value={this.state.country}
                    />
                </div>
                <div>
                    <h2>Billing Address</h2>
                    <label htmlFor="address">Same as Billing Address</label>
                    <input
                        type="checkbox"
                        name="same"
                        id="same"
                        onChange={this.copyBilling}
                    />
                    <label htmlFor="address">Address</label>
                    <input
                    type="text"
                    name="address"
                    onChange={this.handleBilling}
                    value={this.state.shipping.address}
                    />
                    <label htmlFor="zipcode">ZIP/Postal Code</label>
                    <input
                        type="text"
                        name="zipcode"
                        onChange={this.handleBilling}
                        value={this.state.shipping.zipcode}
                    />
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        name="city"
                        onChange={this.handleBilling}
                        value={this.state.shipping.city}
                    />
                    <label htmlFor="country">Country</label>
                    <input
                    type="text"
                    name="country"
                    onChange={this.handleBilling}
                    value={this.state.shipping.country}
                    />
                </div>
                </section>
            </>
        );
    }
}

export default Billing;