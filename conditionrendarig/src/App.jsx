import { useState } from "react"

const App = () => {

  const [isLogin, setIsLogin] = useState(false)

  if (isLogin) {
    return <div>
      <div className="container">
        <div className="d-flex vh-100">
          <div className="m-auto border">
            <form className="p-5">
              <p className="text-center">Log In</p>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
                   <p className="pt-3">Already Have An Account ? <span className="text-primary" onClick={() => {
                setIsLogin(!isLogin)
              }}>Log In</span></p>
            </form>


          </div>
        </div>
      </div>
    </div>
  } else {
    return <div>
      <div className="container">
        <div className="d-flex vh-100">
          <div className="m-auto border">
            <form className="p-5">
              <p className="text-center">Sign Up</p>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
              <p className="pt-3">Already Have An Account ? <span className="text-primary" onClick={() => {
                setIsLogin(!isLogin)
              }}>Log In</span></p>
            </form>


          </div>
        </div>
      </div>
    </div>
  }
 
}

export default App