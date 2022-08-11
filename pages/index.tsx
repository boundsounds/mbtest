import type { NextPage } from 'next'
import { RecoilRoot, selectorFamily, useRecoilValue } from 'recoil'

const userNameQuery = selectorFamily({
  key: 'UserName',
  get: userID => async () => {
    const response = await myDBQuery({userID});
    if (response.error) {
      throw response.error;
    }
    return response.name;
  },
});

function UserInfo({userID}) {
  const userName = useRecoilValue(userNameQuery(userID));
  return <div>{userName}</div>;
}


const Home: NextPage = () => {
  return (
    <RecoilRoot>
      <div>User 1:
        <div>
          sdfsdfsdf
        </div>
      </div>
    </RecoilRoot>


  )
}

export default Home
