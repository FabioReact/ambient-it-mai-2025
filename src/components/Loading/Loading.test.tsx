import { render, screen } from '@testing-library/react';
import Loading from './Loading';
import '@testing-library/jest-dom';

describe('Loading Component', () => {
  it('should render "Loading" if loading state is true', () => {
    render(
      <Loading isLoading={true}>
        <h1>Example</h1>
      </Loading>,
    );

    const loader = screen.getByRole('status');
    const children = screen.queryByRole('heading', {
        name: /example/i,
        level: 1
    })

    expect(loader).toBeInTheDocument();
    expect(children).not.toBeInTheDocument();
  });

  it('should render child component if loading state is false', () => {
    render(
        <Loading isLoading={false}>
          <h1>Example</h1>
        </Loading>,
      );

      const loader = screen.queryByRole('status');
      const children = screen.getByRole('heading', {
          name: /example/i,
          level: 1
      })
  
      expect(loader).not.toBeInTheDocument();
      expect(children).toBeInTheDocument();
  })
});
