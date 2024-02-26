import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./components/root/root";
import { DynamicVenue } from "./components/venue/dynamicVenue";
import About from "./pages/about";
import Blacklist from "./pages/blacklist";
import { CreateAnEvent } from "./pages/createAnEvent";
import { CreateGroup } from "./pages/createGroup";
import { DyanmicGroups } from "./pages/dyanmicGroups";
import { DynamicServiceProvides } from "./pages/dynamicEservice";
import { DynamicEvent } from "./pages/dynamicEvent";
import { DynamicShortVideos } from "./pages/dynamicShortVids";
import { DynamicStories } from "./pages/dynamicStories";
import EventServices from "./pages/eventServices";
import EventShowcase from "./pages/eventShowcase";
import { Groups } from "./pages/groups";
import Home from "./pages/home";
import Login from "./pages/login";
import { MyListings } from "./pages/myListings";
import { Profile } from "./pages/profile";
import { ProfileMedia } from "./pages/profileMedia";
import { ProfilePost } from "./pages/profilePost";
import { ShortVideos } from "./pages/shortVideos";
import { ShortVideoUploadForm } from "./pages/shortVideoUpload";
import SignUp from "./pages/signUp";
import Ticketing from "./pages/ticketing";
import Venues from "./pages/venues";
import DynamicChat from "./pages/dynamicChat";
import { DynamicChatWrapper } from "./pages/dynamicChatWrapper";
import { ProfileMessages } from "./pages/messages";
import { CreateService } from "./pages/createService";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Root />}
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path="/venues"
          element={<Venues />}
        />
        <Route
          path="/ticketing"
          element={<Ticketing />}
        />
        <Route
          path="/event-services"
          element={<EventServices />}
        />
        <Route
          path="/event-showcase"
          element={<EventShowcase />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/blacklist"
          element={<Blacklist />}
        />
        <Route
          path="/sign-up"
          element={<SignUp />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        {/*others*/}
        <Route
          path="*"
          element={<p>There's nothing here: 404!</p>}
        />
        <Route
          path="/events/:event_id"
          element={<DynamicEvent />}
        />
        <Route
          path="/venues/:venue_id"
          element={<DynamicVenue />}
        />
        <Route
          path="/create-event"
          element={<CreateAnEvent />}
        />
        <Route
          path="/profile"
          element={<Profile />}
        />
        <Route
          path="/profile/my-listings"
          element={<MyListings />}
        />
        <Route
          path="/profile/post"
          element={<ProfilePost />}
        />
        <Route
          path="/profile/media"
          element={<ProfileMedia />}
        />
        <Route
          path="/profile/messages"
          element={<ProfileMessages />}
        />
        <Route
          path="/short-videos"
          element={<ShortVideos />}
        />
        <Route
          path="/short-videos/:video_id"
          element={<DynamicShortVideos />}
        />
        <Route
          path="/upload-short-videos"
          element={<ShortVideoUploadForm />}
        />
        <Route
          path="/stories/:story_id"
          element={<DynamicStories />}
        />
        <Route
          path="/groups"
          element={<Groups />}
        />
        <Route
          path="/groups/create"
          element={<CreateGroup />}
        />
        <Route
          path="/groups/:group_id"
          element={<DyanmicGroups />}
        />
        <Route
          path="/event-services/:eservice_id"
          element={<DynamicServiceProvides />}
        />
        <Route
          path="/chat/:recipient_id/:first_name"
          element={<DynamicChatWrapper />}
        />
        <Route
          path="/e-service/create-service"
          element={<CreateService />}
        />
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
