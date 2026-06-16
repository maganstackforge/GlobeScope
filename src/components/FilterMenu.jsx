export default function FilterMenu({ setRegion }) {
  return (
    <select
      // these are invisible label which is shown only screen readers
      aria-label='Filter countries by region'
      className='h-12 w-96 max-w-full cursor-pointer rounded-sm border-none bg-[var(--elements-color)] px-3 py-3 text-[var(--text-color)] shadow-lg outline-none'
      onChange={(e) => setRegion(e.target.value.toLowerCase())}
    >
      <option value=''>All Countries</option>
      <option value='Africa'>Africa</option>
      <option value='Americas'>Americas</option>
      <option value='Asia'>Asia</option>
      <option value='Europe'>Europe</option>
      <option value='Oceania'>Oceania</option>
    </select>
  );
}
