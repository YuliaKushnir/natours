import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async tourId => {
    const stripe = Stripe('pk_test_51R2U4hRwecFW4l2jbxEEWp2iJsmvWeBNjqHffQXHd8rUIOvorIGlbRDVLXD8mSpgGTvzoPL1gAafY7LwtuLx5vzW00BFiZlJA0');

    try{
        // 1) get checkout session from api axios()
        const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
        // console.log(session);

        // 2) create checkout form + charge credit card 
        await stripe.redirectToCheckout({
            sessionId: session.data.session.id
        });
    } catch (err){
        console.log(err);
        showAlert('error', err);
    }
    

};