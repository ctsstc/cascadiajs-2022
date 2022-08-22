let head = require('./head')
let footer = require('./footer')
let bodyScripts = require('./scripts')
let SponsorsContainer = require('../components/sponsors')

module.exports = function Layout ({ path, title, content, socialUrl, excerpt, scripts, rawHead }) {
  return /*html*/`
  <!doctype html>
  <!-- this conference is built by devs for devs -->
  <html lang=en>
    ${ head({ path, title, content, socialUrl, excerpt, scripts, rawHead })}
    <body>
      <div id="root">
        <header>
          <nav>
           <div class="wide">
              <div id="logo"><a href="/">
                <?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="900" height="368" viewBox="0 0 900 368"><path d="M393.71,227.12c-19.13,0-22-15.23-22-24.3V165.18c0-15.44,8-24.3,22-24.3,19.23,0,22.1,15.23,22.1,24.3v3.17H404v-3.17c0-3.14,0-12.71-10.27-12.71s-10.28,9.57-10.28,12.71v37.64c0,3.14,0,12.71,10.28,12.71S404,206,404,202.82v-3.29h11.83v3.29C415.81,218,407.55,227.12,393.71,227.12Z" fill="#fff6cd"/><path d="M458.77,225.53,456.33,209H438.6l-2.44,16.5H424.35l13-83.06h20.15l13,83.06Zm-18.36-27.47h14.11l-7.06-43.82Z" fill="#fff6cd"/><path d="M501.1,227.12c-19.13,0-22-15.23-22-24.3v-7.08h11.34v7.08c0,10.61,5.79,12.83,10.64,12.83,10.13,0,10.64-10.08,10.64-12.1,0-3.65-1.4-10.38-10.81-14.39-14.06-6.26-21.81-9.71-21.81-25.2,0-15.1,7.6-23.08,22-23.08,19.23,0,22.1,15.23,22.1,24.3v2.44H511.74v-2.44c0-3-.77-13-10.64-13-3.37,0-6,.92-7.78,2.73-2.93,3-2.88,7.53-2.86,9.48v.39c0,5.41,3.82,9.52,11.68,12.56,11.1,4.41,21.06,9.74,21.06,26.17C523.2,218.53,515.15,227.12,501.1,227.12Z" fill="#fff6cd"/><path d="M555,227.12c-19.13,0-22-15.23-22-24.3V165.18c0-15.44,8-24.3,22-24.3,19.23,0,22.1,15.23,22.1,24.3v3.17H565.25v-3.17c0-3.14,0-12.71-10.27-12.71S544.7,162,544.7,165.18v37.64c0,3.14,0,12.71,10.28,12.71s10.27-9.57,10.27-12.71v-3.29h11.83v3.29C577.08,218,568.82,227.12,555,227.12Z" fill="#fff6cd"/><path d="M620,225.53,617.6,209H599.87l-2.44,16.5H585.62l13-83.06h20.16l13,83.06Zm-18.36-27.47h14.11l-6.56-43.82h-1Z" fill="#fff6cd"/><path d="M660.67,225.53H640.51V142.47h20.15c15,0,23.93,8.67,23.93,23.2v36.78c0,11.16-6.08,23.09-23.15,23.09ZM652,214.19h8.93c11.53,0,12.11-10.09,12.11-12.11V166c0-2.87-.87-12.23-12.11-12.23H652Z" fill="#fff6cd"/><polygon points="694.27 225.53 694.27 214.19 710.15 214.19 710.15 153.81 694.76 153.81 694.76 142.47 738.11 142.47 738.11 153.81 722.71 153.81 722.71 214.19 738.35 214.19 738.35 225.53 694.27 225.53" fill="#fff6cd"/><path d="M781.31,225.53,778.87,209H761.14l-2.44,16.5H746.89l13-83.06h20.15l13,83.06ZM763,198.06h14.11l-6.56-43.82h-1Z" fill="#fff6cd"/><path d="M823.64,227.12c-14.38.06-22-8.41-22-24.3V195H813v7.81c0,8.68,3.58,13.08,10.64,13.08,10.64,0,10.64-10.12,10.64-13.45V153.81H805.45V142.47h40.29v60.35C845.74,218.6,838.1,227.06,823.64,227.12Z" fill="#fff6cd"/><path d="M877.4,227.12c-19.13,0-22-15.23-22-24.3v-7.08h11.34v7.08c0,10.61,5.78,12.83,10.64,12.83,10.13,0,10.64-10.08,10.64-12.1,0-3.65-1.41-10.38-10.81-14.39-14.06-6.26-21.81-9.71-21.81-25.2,0-15.1,7.6-23.08,22-23.08,19.23,0,22.1,15.23,22.1,24.3v2.44H888v-2.44c0-3-.77-13-10.64-13-3.37,0-6,.92-7.78,2.73-2.93,3-2.88,7.53-2.86,9.48v.39c0,5.41,3.82,9.52,11.68,12.56,11.1,4.41,21.06,9.74,21.06,26.17C899.5,218.53,891.44,227.12,877.4,227.12Z" fill="#fff6cd"/><path d="M.5,367.18V.82H328.69V367.18Zm169.27-11.44H317.25V12.26H11.94V355.74H159.22V227.3l-27.3,27.29-7.46-7.46L164.59,207l40.14,40.13-7.47,7.46L169.77,227.1Z" fill="#fff6cd"/><polygon points="164.59 91.24 131.92 123.91 124.46 116.45 164.59 76.31 204.72 116.45 197.26 123.91 164.59 91.24" fill="#fff6cd"/><polygon points="164.59 123.91 107.42 181.08 99.96 173.62 164.59 108.98 229.23 173.62 221.77 181.08 164.59 123.91" fill="#fff6cd"/><polygon points="164.59 156.58 82.91 238.26 75.45 230.8 164.59 141.66 253.73 230.8 246.27 238.26 164.59 156.58" fill="#fff6cd"/><polygon points="164.59 189.25 107.42 246.43 99.96 238.97 164.59 174.33 229.23 238.97 221.77 246.43 164.59 189.25" fill="#fff6cd"/></svg>
              </a></div>
              <div class="push"><a href="/conference">About</a></div>
              <div class="spacer"><a href="/conference/attend">Attend</a></div>
              <div class="spacer"><a href="/schedule">Schedule</a></div>
              <div class="spacer"><a href="/trainings">Training</a></div>
              <div class="spacer"><a href="/sponsors/jobs">Jobs</a></div>
              <div class="spacer"><a href="/code-of-conduct">Code of Conduct</a></div>
              <div class="spacer"><a href="/faq">FAQ</a></div>
              <div class="spacer"><a href="/tickets" class="buy">Tickets</a></div>
            </div>
          </nav>
        </header>
        <main id="content">
          ${ content }
          <section id="sponsors" class="landing">
            <h1>Our Sponsors</h1>
            ${ SponsorsContainer() }
            <div class="cta"><a href="/sponsorships">Sponsor Our Event</a></div>
          </section>
          <section id="testimonials" class="landing">
            <h1>Testimonials</h1>
            <div>
              <div><blockquote class="twitter-tweet"><p lang="en" dir="ltr">I&#39;m absolutely blown away by how much <a href="https://twitter.com/cartwr?ref_src=twsrc%5Etfw">@cartwr</a> and the entire team <a href="https://twitter.com/CascadiaJS?ref_src=twsrc%5Etfw">@CascadiaJS</a> lifts up and highlights the people who contribute to and make this conference so special. This is what a conf that focuses on community looks like! 🌲 <a href="https://twitter.com/hashtag/cjs19?src=hash&amp;ref_src=twsrc%5Etfw">#cjs19</a> <a href="https://t.co/Yh0CdOzVyx">pic.twitter.com/Yh0CdOzVyx</a></p>&mdash; Divya (@shortdiv) <a href="https://twitter.com/shortdiv/status/1192967417867034625?ref_src=twsrc%5Etfw">November 9, 2019</a></blockquote></div>
              <div><blockquote class="twitter-tweet"><p lang="en" dir="ltr">I absolutely LOVED MCing <a href="https://twitter.com/CascadiaJS?ref_src=twsrc%5Etfw">@CascadiaJS</a>! This was such a well organized conference, huge kudos to the speakers, the organizers, the sponsors, and of course the audience + community for making it great. It was a pleasure!! <a href="https://twitter.com/hashtag/cjs20?src=hash&amp;ref_src=twsrc%5Etfw">#cjs20</a> <a href="https://t.co/EhqjhYJEVY">pic.twitter.com/EhqjhYJEVY</a></p>&mdash; Cassidy (@cassidoo) <a href="https://twitter.com/cassidoo/status/1301313550577577984?ref_src=twsrc%5Etfw">September 3, 2020</a></blockquote></div>
              <div><blockquote class="twitter-tweet"><p lang="en" dir="ltr">Attended <a href="https://twitter.com/hashtag/CascadiaJS?src=hash&amp;ref_src=twsrc%5Etfw">#CascadiaJS</a> last week! Awesome speakers/workshops and very well done virtual/hybrid experience! Can&#39;t recommend it enough for developers no matter where they are in their coding journey! 🖥️🌲<a href="https://twitter.com/hashtag/webdevelopment?src=hash&amp;ref_src=twsrc%5Etfw">#webdevelopment</a> <a href="https://twitter.com/hashtag/javascript?src=hash&amp;ref_src=twsrc%5Etfw">#javascript</a> <a href="https://twitter.com/hashtag/CascadiaJS2021?src=hash&amp;ref_src=twsrc%5Etfw">#CascadiaJS2021</a> <a href="https://twitter.com/hashtag/PNW?src=hash&amp;ref_src=twsrc%5Etfw">#PNW</a> <a href="https://t.co/imknQzJmBZ">pic.twitter.com/imknQzJmBZ</a></p>&mdash; Nathan Pickard (@NathanPickard) <a href="https://twitter.com/NathanPickard/status/1457848244034170886?ref_src=twsrc%5Etfw">November 8, 2021</a></blockquote></div>
              <div><blockquote class="twitter-tweet"><p lang="en" dir="ltr">That’s a wrap on <a href="https://twitter.com/hashtag/CascadiaJS?src=hash&amp;ref_src=twsrc%5Etfw">#CascadiaJS</a> 2021! I’m so stoked I got to attend an in person event! <br><br>Can’t wait for next year at Sun River! Was lovely meeting you all! <a href="https://t.co/N936UaiOi1">pic.twitter.com/N936UaiOi1</a></p>&mdash; tyler (@airercode500) <a href="https://twitter.com/airercode500/status/1456474236764123136?ref_src=twsrc%5Etfw">November 5, 2021</a></blockquote></div>
              <div><blockquote class="twitter-tweet"><p lang="en" dir="ltr">Had an amazing time at <a href="https://twitter.com/CascadiaJS?ref_src=twsrc%5Etfw">@CascadiaJS</a>. See you next year! <a href="https://t.co/eJYIkqHVMf">pic.twitter.com/eJYIkqHVMf</a></p>&mdash; Treasure Porth (@treasureporth) <a href="https://twitter.com/treasureporth/status/1194446190068158464?ref_src=twsrc%5Etfw">November 13, 2019</a></blockquote></div>
              <div><blockquote class="twitter-tweet"><p lang="en" dir="ltr">I was honored to participate in <a href="https://twitter.com/hashtag/CascadiaJS?src=hash&amp;ref_src=twsrc%5Etfw">#CascadiaJS</a> again this year. I&#39;ve been so impressed again with all the creativity and effort the organizers, speakers, and community puts into making it a uniquely fun event. ✨ <a href="https://t.co/x0byI4utED">pic.twitter.com/x0byI4utED</a></p>&mdash; Nicole Oliver (@nixcodes) <a href="https://twitter.com/nixcodes/status/1456441379760992258?ref_src=twsrc%5Etfw">November 5, 2021</a></blockquote></div>
              <div><blockquote class="twitter-tweet"><p lang="en" dir="ltr">Huge shoutout to the <a href="https://twitter.com/CascadiaJS?ref_src=twsrc%5Etfw">@CascadiaJS</a> organizers for a truly unique experience that went above and beyond anything I could have imagined. You could really feel their passion for the community and the time, attention, and care they put into every single aspect. THANK YOU!! ❤️🌲 <a href="https://twitter.com/hashtag/cjs20?src=hash&amp;ref_src=twsrc%5Etfw">#cjs20</a> <a href="https://t.co/5NH2FVfMA2">pic.twitter.com/5NH2FVfMA2</a></p>&mdash; Rachael Thomas (@rachael_codes) <a href="https://twitter.com/rachael_codes/status/1301317932840972289?ref_src=twsrc%5Etfw">September 3, 2020</a></blockquote></div>
              <div><blockquote class="twitter-tweet"><p lang="en" dir="ltr">So about <a href="https://twitter.com/CascadiaJS?ref_src=twsrc%5Etfw">@CascadiaJS</a> last year… <a href="https://t.co/iFsMyd71FA">pic.twitter.com/iFsMyd71FA</a></p>&mdash; Michelle Bakels (@MichelleBakels) <a href="https://twitter.com/MichelleBakels/status/1486119944630775808?ref_src=twsrc%5Etfw">January 25, 2022</a></blockquote></div>
              <div><blockquote class="twitter-tweet"><p lang="en" dir="ltr">Yeah, tonight was great. <a href="https://twitter.com/hashtag/CascadiaJS?src=hash&amp;ref_src=twsrc%5Etfw">#CascadiaJS</a> <a href="https://t.co/4hHgTP46fg">pic.twitter.com/4hHgTP46fg</a></p>&mdash; Jessica West (@jessicaewest) <a href="https://twitter.com/jessicaewest/status/1456483897596809216?ref_src=twsrc%5Etfw">November 5, 2021</a></blockquote></div>
              <div><blockquote class="twitter-tweet"><p lang="en" dir="ltr">Awesome <a href="https://twitter.com/CascadiaJS?ref_src=twsrc%5Etfw">@CascadiaJS</a> afterparty at the <a href="https://twitter.com/LivingComputers?ref_src=twsrc%5Etfw">@LivingComputers</a><br><br>I had so much fun. <a href="https://twitter.com/hashtag/CJS18?src=hash&amp;ref_src=twsrc%5Etfw">#CJS18</a> <a href="https://t.co/xUiF2iupz6">pic.twitter.com/xUiF2iupz6</a></p>&mdash; Welling Guzmán (@wellingguzman) <a href="https://twitter.com/wellingguzman/status/1063708080259518464?ref_src=twsrc%5Etfw">November 17, 2018</a></blockquote></div>   
              <div><blockquote class="twitter-tweet"><p lang="en" dir="ltr">I can&#39;t thank <a href="https://twitter.com/crtr0?ref_src=twsrc%5Etfw">@crtr0</a>, the <a href="https://twitter.com/CascadiaJS?ref_src=twsrc%5Etfw">@CascadiaJS</a> team, and the conference sponsors enough for the opportunity to attend <a href="https://twitter.com/hashtag/cascadiajs?src=hash&amp;ref_src=twsrc%5Etfw">#cascadiajs</a>! Everyone was so encouraging and welcoming, I&#39;m thrilled to bring back what I learned to <a href="https://twitter.com/MakeThinkCode?ref_src=twsrc%5Etfw">@MakeThinkCode</a> &amp; <a href="https://twitter.com/pnca?ref_src=twsrc%5Etfw">@pnca</a>. <a href="https://t.co/5hVyhcmyUL">pic.twitter.com/5hVyhcmyUL</a></p>&mdash; meganmckissack (@meganmckissack) <a href="https://twitter.com/meganmckissack/status/1064595216995246081?ref_src=twsrc%5Etfw">November 19, 2018</a></blockquote></div>
            </div>
          </section>
        </main>
        ${ footer() }
      </div>
      ${ bodyScripts({ scripts })}
    </body>
  </html>
`
}
