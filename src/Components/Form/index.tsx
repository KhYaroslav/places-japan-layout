import './Form.css'

export default function Form() {
  return (
    <form className="search__form">
      <fieldset className="search__form-wrapper">
        <p className="search__form-info">
          <input type="text" className="search__form-field" placeholder='What would you like to do?'/>
          <input type="text" className="search__form-field" placeholder='Where would you like to go?'/>
          <button type='submit' className='search__form-submit'>search</button>
        </p>
      </fieldset>
    </form>
  )
}
