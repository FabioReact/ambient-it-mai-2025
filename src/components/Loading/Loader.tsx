import classModule from './loader.module.css'

const Loader = () => {
  return (
    <div role='status' aria-busy='true' className={classModule.loader}></div>
  )
}

export default Loader