export default function Form({ ...props }) {
  return (
    <>
      <section className="contact">
        <div className="container">
          <div className="head-content">
            <h2 className="title">Contact Us</h2>
            <h3>Don't Hesitate To Contact Us</h3>
          </div>
          <div className="form-wrapper">
            <form action="">
              <div className="form-field three">
                <div className="field">
                  <input type="text" name="" id="" />
                  <i className="bi bi-person"></i>
                </div>
                <div className="field">
                  <input type="text" name="" id="" />
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="field">
                  <input type="text" name="" id="" />
                  <i className="bi bi-telephone"></i>
                </div>
              </div>
              <div className="form-field">
                <div className="field">
                  <textarea name="" id=""></textarea>
                  <i className="bi bi-pen"></i>
                </div>
              </div>
              <div className="btn-field">
                <button className="jn-btn-blue">
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
