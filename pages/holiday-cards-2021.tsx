import type { NextPage } from 'next';
import Image from 'next/image';

import DarkModeButton from '../components/DarkModeButton';

const HolidayCards2021: NextPage = () => {
  return (
    <>
      <article className="max-h-full bg-white dark:bg-gray-900 p-6 grid">
        <nav className="w-full grid justify-end">
          <DarkModeButton />
          {/* <div className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-gray-700 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div> */}
        </nav>

        <div className="container mx-auto mt-4 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-20">
          <div className="mt-8 md:mt-0 lg:justify-end col-span-2">
            <h1 className="text-4xl text-gray-800 text-center md:text-left font-bold mb-6">
              Holiday Cards - 10th Anniversary Edition 🎊🥳🎉
            </h1>
            <p>👋 Happy Holidays family and friends! 🌟</p>
            <br />
            <p>
              Every year I challenge myself in figuring out how to make the
              holidays special with my card charity drive. And every year, it
              turns out to be a bigger challenge than I initially anticipated.
              And because this is the 10th year of sending holiday cards, I will
              present to you something wild. 🐻
            </p>
            <br />
            <Image
              src="https://images.unsplash.com/uploads/1411400493228e06a6315/ad711a20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Wild safari image"
              width="600"
              height="400"
            />
            <br />
            <p>
              For those of you new to my holiday tradition, I will give you a
              holiday card in exchange for a charity donation. ✉️ This year, I
              am extending donations to friends of friends! If you can find one
              other person to donate to my cause, I'll give you a special
              shout-out, as well as an extra bonus in my gifts to you this year!
              👬👭👫
            </p>
            <br />
            <p>
              This year's cards will be &quot;found&quot; postcards. For over a
              decade, I've been collecting postcards from around the world. And
              as sad as it might be to part with them, in its place is found
              art. So I'll be making personalized cards for each and every one
              of you who donates.
            </p>
            <br />
            <h2 className="text-2xl text-gray-800 text-center md:text-left font-bold mb-6">Something Different</h2>
            <br />
            <p>
              Let's take a step back and reflect on what a year it's been. We
              entered this year hopeful for a smooth vaccine rollout. There was
              a glimmer this year that we might be able to turn things around.
              We did, but things are still not back to our original
              &quot;normal&quot;, and there's been talk of a new normal with
              mask wearing and potential annual booster shots. And it's easy to
              get pessimistic about the Omicron variant, but you have to
              remember how far we've gone since the beginning of last year.
            </p>
            <br />
            <p>
              Personally, this year has been a mix of love and loss. I've been
              grieving over the loss of someone special to me, and I've received
              a lot of support from family and friends. To get me through it,
              I've been on a music binge. Here's another challenge: share with
              me a song that helps you through the tough times this year. I'll
              compile it and release it as a playlist for you all to listen to.
            </p>
            <br />
            <h2 className="text-2xl text-gray-800 text-center md:text-left font-bold mb-6">Charity</h2>
            <br />
            <p>
              This year marked the 5th anniversary of my friend Jonathan's
              suicide. It is still shocking to find out he took his own life,
              and the ongoing process to process through grief. That's why this
              year I've decided my charity of choice is the{' '}
              <a href="https://afsp.org/">
                American Foundation for Suicide Prevention
              </a>
              . AFSP has resources for suicide prevention as well as helping
              through who have lost close ones to suicide. It's the service I
              needed at the time, and I think it's time to pay it forward. ☮️ 🌎
            </p>
            <br />
            <h2 className="text-2xl text-gray-800 text-center md:text-left font-bold mb-6">
              <em>A recap on how to participate:</em>
            </h2>
            <ol>
              <li>
                Donate to the American Foundation for Suicide Prevention.{' '}
                <a href="https://supporting.afsp.org/index.cfm?fuseaction=donate.event&amp;eventID=1&amp;language=en">
                  Donation Link
                </a>
              </li>
              <li>
                <a href="mailto:jermspeaks@gmail.com">Email me</a> with your
                donation and address you would like me to send the card to.
              </li>
              <li>
                Share this email with someone who you think would also like to
                donate along with a referral back to yourself so I add an extra
                gift for you
              </li>
              <li>Share your song of choice for the hard times of 2021</li>
            </ol>
            <br />
            <p>
              Happy Holidays,
              <br />
              Jeremy Wong
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default HolidayCards2021;
