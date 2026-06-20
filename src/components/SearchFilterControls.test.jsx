import { describe, test, expect, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import SearchFilterControls from './SearchFilterControls';

// Mock context
vi.mock('../Contexts/CountriesContext', () => ({
  useCountries: vi.fn(),
}));

// Mock CountryCard (we don’t test it here)
vi.mock('./CountryCard', () => ({
  default: ({ name }) => <div data-testid='country-card'>{name}</div>,
}));

// Mock shimmer
vi.mock('./CountriesListShimmer', () => ({
  default: () => <div data-testid='shimmer'>Loading...</div>,
}));

import { useCountries } from '../Contexts/CountriesContext';

describe('SearchFilterControls', () => {
  const mockCountries = [
    {
      name: { common: 'India' },
      region: 'Asia',
      cca3: 'IND',
      population: 1000,
      flags: { svg: '' },
      capital: ['New Delhi'],
    },
    {
      name: { common: 'France' },
      region: 'Europe',
      cca3: 'FRA',
      population: 2000,
      flags: { svg: '' },
      capital: ['Paris'],
    },
  ];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  // ---------------------------
  // 1. RENDER TEST
  // ---------------------------
  test('renders search input and region dropdown', () => {
    useCountries.mockReturnValue({
      countries: mockCountries,
      loading: false,
    });

    render(<SearchFilterControls />);

    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  // ---------------------------
  // 2. LOADING STATE
  // ---------------------------
  test('shows shimmer when loading is true', () => {
    useCountries.mockReturnValue({
      countries: [],
      loading: true,
    });

    render(<SearchFilterControls />);

    expect(screen.getByTestId('shimmer')).toBeInTheDocument();
  });

  // ---------------------------
  // 3. SEARCH FILTER TEST
  // ---------------------------
  test('filters countries by search input', async () => {
    const user = userEvent.setup();

    useCountries.mockReturnValue({
      countries: mockCountries,
      loading: false,
    });

    render(<SearchFilterControls />);

    const input = screen.getByPlaceholderText(/search/i);

    await user.type(input, 'India');

    // wait for debounce (300ms)
    await waitFor(() => {
      expect(screen.getByText('India')).toBeInTheDocument();
    });
  });

  // ---------------------------
  // 4. REGION FILTER TEST
  // ---------------------------
  test('filters countries by region', async () => {
    const user = userEvent.setup();

    useCountries.mockReturnValue({
      countries: mockCountries,
      loading: false,
    });

    render(<SearchFilterControls />);

    const dropdown = screen.getByRole('combobox');

    await user.selectOptions(dropdown, 'Europe');

    await waitFor(() => {
      expect(screen.getByText('France')).toBeInTheDocument();
    });
  });
});
