import { Form, redirect, useActionData } from "react-router-dom";

function Contact(props) {
  const data = useActionData()
  return (
    
<section className="bg-white">
  <div className="py-4 max-w-3xl mx-auto">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold  text-gray-900">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-gray-500 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      <Form method="POST" action="/help/contact" className="space-y-8">
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
              <input type="email" name="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@flowbite.com" required/>
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
              <input type="text" name="subject" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required/>
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
              <textarea name="message" id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-500 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
          {data && data.error && <p className="text-red-400 py-2">{data.error}</p>}
      </Form>
  </div>
</section>
  );
}


export default Contact;

export const formAction = async ({request}) => {
  console.log(request);
  const data = await request.formData()

  const submission = {
    email:data.get('email'),
    subject:data.get('subject'),
    message:data.get('message')
  }
  console.log(submission);

  if(submission.message.length < 10){
    return {error:'Message must be ateast 10 chars long'}
  }

  return redirect('/')
}
