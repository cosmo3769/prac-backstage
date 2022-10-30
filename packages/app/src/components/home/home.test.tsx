import React from 'react';
import {Home} from './home';
// import { renderInTestApp, TestApiProvider } from '@backstage/test-utils'
// import { identityApiRef, useApi } from '@backstage/core-plugin-api';
// import { screen, waitFor } from '@testing-library/react';
// import { useUserProfile } from '@backstage/plugin-user-settings';
import * as api from "./api";
import { renderInTestApp } from '@backstage/test-utils';

// describe('Home', () => {
  
//   it('Should render content', async () => {
//     const rendered = await renderInTestApp(
//       <TestApiProvider
//         apis={[
//           [identityApiRef, mockIdentityApi],
//         ]}
//       >
//         <Home/>
//       </TestApiProvider>,
//     );

//     await expect(
//       rendered.findByTitle('Welcome Piyush Thakur'),
//     ).resolves.toBeInTheDocument();
   
//   });
// });

// describe('Home', () => {
//     // jest.mock("identityApiRef")

//     // const profileInfo = identityApiRef.T.getProfileInfo()
//     // const backstageInfo = identityApiRef.T.getBackstageIdentity()

//     // const identityApi = useApi(identityApiRef)
//     // const profile = identityApi.getProfileInfo()
//     // const identity = identityApi.getBackstageIdentity()
//     // const mockIdentityApi = identityApiRef.T.getProfileInfo()
//     // identityApi
//     // jest.mock("mockIdentityApi")
    

//     it('should give correct username', async () => {
//       // const identityApi = useApi(identityApiRef)
//       // const profile = identityApi.getProfileInfo()
//       // let displayName = (await profile).displayName

//       // displayName = "Piyush Thakur"
//       let displayName = await useUserProfile
//       // let displayName = (await mockIdentityApi).displayName
//       // displayName = 'Piyush Thakur'
//       // const displayName = (await profileInfo).displayName
//       // const mockProfileInfo = 
//       // const rendered = await renderInTestApp(
//       //   <TestApiProvider
//       //     apis={[
//       //       [profileInfo, displayName]
//       //     ]}>
//       //       <Home />
//       //   </TestApiProvider>
//       // )
//       const rendered = render (
//         <Home />
//       )
//       // rendered.getAllByTitle('Welcome ')
//       expect(
//         rendered.getAllByTitle('Welcome Piyush Thakur')
//       ).toBeInTheDocument()
//     })
// })

// import { Home } from './home';
// import React from 'react';
// import '@testing-library/jest-dom/extend-expect';
// import { render, waitForElement } from '@testing-library/react';

// describe('59892259', () => {
//   let originFetch;
//   beforeEach(() => {
//     originFetch = (global as any).identityApiRef;
//   });
//   afterEach(() => {
//     (global as any).identityApiRef = originFetch;
//   });
//   it('should pass', async () => {
//     const fakeResponse = { title: 'example text' };
//     const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
//     const mockedFetch = jest.fn().mockResolvedValueOnce(mRes as any);
//     (global as any).fetch = mockedFetch;
//     const rendered = render(<Home/>);
//     expect(rendered.findByTitle('Welcome example test')).toBeInTheDocument()
//     // const div = await async(() => getByTestId('test'));
//     // expect(div).toHaveTextContent('Welcome example text');
//     // expect(mockedFetch).toBeCalledTimes(1);
//     // expect(mRes.json).toBeCalledTimes(1);
//   });
// });

jest.mock("./api");
const mockedapi = jest.mocked(api)

describe("Dashboard", () => {
    // api.useUserProfile.mockResolvedValue({
    //     displayName: "Piyush Thakur"
    // })
    // const displayName = {displayName: 'Piyush Thakur'}
    mockedapi.useUserProfile.mockResolvedValueOnce()
    it("should render",async () => {    
        const rendered = await renderInTestApp(
                <Home/>
        )
        // await waitFor(() => {
        //     expect(rendered.getByText("Welcome Piyush")).toBeInTheDocument();
        // })
        await expect(
            rendered.findByText("Welcome undefined")
        ).resolves.toBeInTheDocument()
   })
})