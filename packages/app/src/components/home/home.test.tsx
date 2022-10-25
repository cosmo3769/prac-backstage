import React from 'react';
import {Home} from './home';
import { renderInTestApp, TestApiProvider } from '@backstage/test-utils'
import { identityApiRef } from '@backstage/core-plugin-api';

describe('jiraContent', () => {
  it('Should render Jira View', async () => {
    const rendered = await renderInTestApp(
      <TestApiProvider
        apis={[
          [identityApiRef],
        ]}
      >
        <Home/>
      </TestApiProvider>,
    );

    await expect(
      rendered.findByText('Welcome Guest'),
    ).resolves.toBeInTheDocument();
  });
});