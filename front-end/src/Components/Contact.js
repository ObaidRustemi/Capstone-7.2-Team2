import { init } from "emailjs-com";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import { Form, Button, Card, Alert, Container, Text } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.min.css";
import "../Styling/Contact.css"

init("user_8IkyJiaBrk0LNwhab0V1p");
const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const toastifySuccess = () => {
    toast("Your message was sent!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
      theme: "dark"
    });
  };

  const onSubmit = async (data) => {
    const serviceId = "service_r5vgw9i";
    const templateId = "template_185wctp";
    const userId = "user_8IkyJiaBrk0LNwhab0V1p";
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      await emailjs.send(serviceId, templateId, templateParams, userId);

      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Card>
      <Card.Body>
      <h2 className="text-center mb-4">Connect</h2>
    <div className="ContactForm">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="contactForm">
              <Form
                id="contact-form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                {/* Row 1 of form */}
                <div className="row formRow">
                  <div className="col-6">
                    <Form.Group className="contact-input">
                    <Form.Control
                      
                      type="text"
                      name="name"
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Please enter your name",
                        },
                        maxLength: {
                          value: 30,
                          message: "Please use 30 characters or less",
                        },
                      })}
                      className="form-control formInput"
                      placeholder="Name"
                    />
                    {errors.name && (
                      <span className="errorMessage" style={{color:"red"}}>
                        {errors.name.message}
                      </span>
                    )}
                    </Form.Group>
                  </div>
                  <div className="col-6">
                    <Form.Group 
                    className="contact-input"
                    id="email-input">
                    <Form.Control
                      type="email"
                      name="email"
                      {...register("email", {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      })}
                      className="form-control formInput"
                      placeholder="Email address"
                    />
                    {errors.email && (
                      <span className="errorMessage" style={{color:"red"}}>
                        Please enter a valid email address
                      </span>
                    )}
                    </Form.Group >
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className="row formRow">
                  <div className="col">
                    <Form.Group className="contact-input">
                    <Form.Control
                      type="text"
                      name="subject"
                      {...register("subject", {
                        required: {
                          value: true,
                          message: "Please enter a subject",
                        },
                        maxLength: {
                          value: 75,
                          message: "Subject cannot exceed 75 characters",
                        },
                      })}
                      className="form-control formInput"
                      placeholder="Subject"
                    />
                    {errors.subject && (
                      <span className="errorMessage" style={{color:"red"}}>
                        {errors.subject.message}
                      </span>
                    )}
                    </Form.Group>
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className="row formRow">
                  <div className="col">
                    <Form.Group className="contact-input">
                    <Form.Control as="textarea"
                    // <textarea as="textarea"
                      rows={3}
                      name="message"
                      {...register("message", {
                        required: true,
                      })}
                      className="form-control formInput"
                      placeholder="Message"
                    />
                    {errors.message && (
                      <span className="errorMessage" style={{color:"red"}}>
                        Please enter a message
                      </span>
                    )}
                    </Form.Group>
                  </div>
                </div>
                <Button id="contact-btn" className="submit-btn" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
    </Card.Body>
</Card>
    </Container>
  );
};

export default Contact;
