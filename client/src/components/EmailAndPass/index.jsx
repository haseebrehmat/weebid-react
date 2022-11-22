import { WhiteInput } from 'layouts'

const EmailAndPass = ({ email, pass, onChange = null }) => (
  <>
    <WhiteInput label='Email' value={email} name='email' onChange={onChange} />
    <WhiteInput label='Password' value={pass} type='password' name='password' onChange={onChange} />
  </>
)

export default EmailAndPass
