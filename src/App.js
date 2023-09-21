import './App.css';
import ButtonComp from './components/ButtonComp';
import { useSelector } from 'react-redux';
import { PaystackButton } from 'react-paystack'
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

function App() {
  const publicKey  = "pk_test_b67fe7915d142f38c397909288fc3c763dc669ab"
  const {num} = useSelector((state)=> state.globalNum);
  const {post} = useSelector((state)=> state.PostBlog);

  const componentProps = {
    email: "daniel@gmail.com",
    amount: 2000,
    metadata: {
      name: "Daniel",
      phone: "765433456789"
    },
    publicKey,
    text: "MAke Payment",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };

  //FLUTTERWAVE
  const config = {
    public_key: 'FLWPUBK_TEST-1c3c1a94b35399bcebf25488ba33ca32-X',
    tx_ref: Date.now(),
    amount: 100,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
      phone_number: '070********',
      name: 'john doe',
    },
    customizations: {
      title: 'My store',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const fwConfig = {
    ...config,
    text: 'Pay with Flutterwave!',
    callback: (response) => {
       console.log(response);
      closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {},
  };

  const dan = {
    textDecoration: "underline",
    color: "blue"
  }
  return (
    // VIRTUAL DOM
    //
    <>
      {num}
      {post &&
        post.map((el, i)=>(
          <div key={i}>
            {el.author}
          </div>
        ))
      }
      <h1 style={dan}>Welcome to React Class</h1>
      <h1 className='jj bg-slate-950'>Lorem ipsum dolor sit amet.</h1>
      <h1 className='text-green-400'>Test Tailwind</h1>
      <h1 className='bg-red-500 ml-10'></h1>
      <h1></h1>
      <div className='sm:flex block justify-center'>
        <div className='w-24 h-24 m-auto sm:m-0 md:w-52 bg-orange-600 hover:bg-blue-400 transition-ease-in'></div>
        <div className='w-24 h-24 m-auto mt-10 sm:m-0 bg-orange-300'></div>
        <ButtonComp />
        <PaystackButton {...componentProps} />
        <FlutterWaveButton {...fwConfig} />
      </div>
    </>
  );
}

export default App;
