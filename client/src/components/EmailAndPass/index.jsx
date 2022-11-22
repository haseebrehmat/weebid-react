import { Input } from 'layouts'

const EmailAndPass = ({ email, pass, onChange = null }) => (
  <>
    <Input label='Email' value={email} name='email' onChange={onChange} />
    <Input label='Passowrd' value={pass} type='password' name='password' onChange={onChange} />
  </>
)

export default EmailAndPass
