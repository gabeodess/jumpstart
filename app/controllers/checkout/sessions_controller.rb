class Checkout::SessionsController < ApiController
  def create
    checkout = Stripe::Checkout::Session.create({
     line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      }],
     mode: 'payment',
     ui_mode: 'embedded',
     return_url: 'https://example.com/checkout/return?session_id={CHECKOUT_SESSION_ID}'
   })

    render json: {clientSecret: checkout.client_secret}
  end
end
