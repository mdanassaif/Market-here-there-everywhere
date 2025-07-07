import { Platform, PlatformDetails } from '../types/platform';

export const PLATFORMS: Platform[] = [
  {
    name: 'Reddit',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547l-.8 3.747c1.824.07 3.48.632 4.674 1.488c.308-.309.73-.491 1.207-.491c.968 0 1.754.786 1.754 1.754c0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87c-3.874 0-7.004-2.176-7.004-4.87c0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754c.463 0 .898.196 1.207.49c1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197a.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248c.687 0 1.248-.561 1.248-1.249c0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25c0 .687.561 1.248 1.249 1.248c.688 0 1.249-.561 1.249-1.249c0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094a.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913c.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463a.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73c-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
      </svg>
    ),
    description: 'Authentic feedback from niche communities.'
  },
  {
    name: 'Product Hunt',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" fillRule="evenodd" d="M13.6 8.4h-3.4V12h3.4a1.8 1.8 0 1 0 0-3.6m0 6h-3.4V18H7.8V6h5.8a4.2 4.2 0 1 1 0 8.4M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12c6.627 0 12-5.372 12-12S18.627 0 12 0"/>
      </svg>
    ),
    description: 'The ultimate launch platform for startups.'
  },
 
  {
    name: 'Peerlist',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 0C2.667 0 0 2.667 0 12s2.673 12 12 12s12-2.667 12-12S21.327 0 12 0zm8.892 20.894c-1.57 1.569-4.247 2.249-8.892 2.249s-7.322-.68-8.892-2.25C1.735 19.522 1.041 17.3.89 13.654A39.74 39.74 0 0 1 .857 12c0-1.162.043-2.201.13-3.13c.177-1.859.537-3.278 1.106-4.366c.284-.544.62-1.006 1.013-1.398s.854-.729 1.398-1.013C5.592 1.524 7.01 1.164 8.87.988C9.799.9 10.838.858 12 .858c4.645 0 7.322.68 8.892 2.248c1.569 1.569 2.25 4.246 2.25 8.894s-.681 7.325-2.25 8.894zM20.538 3.46C19.064 1.986 16.51 1.357 12 1.357c-4.513 0-7.067.629-8.54 2.103C1.986 4.933 1.357 7.487 1.357 12c0 4.511.63 7.065 2.105 8.54C4.936 22.014 7.49 22.643 12 22.643s7.064-.629 8.538-2.103c1.475-1.475 2.105-4.029 2.105-8.54s-.63-7.065-2.105-8.54zM14.25 16.49a6.097 6.097 0 0 1-2.442.59v2.706H10.45v.357H6.429V5.57h.357V4.214h5.676c3.565 0 6.467 2.81 6.467 6.262c0 2.852-1.981 5.26-4.68 6.013zm-1.788-8.728H10.45v5.428h2.011c1.532 0 2.802-1.2 2.802-2.714s-1.27-2.714-2.802-2.714zm.901 4.351c.117-.239.186-.502.186-.78c0-1.01-.855-1.857-1.945-1.857h-.296V8.62h1.154c1.09 0 1.945.847 1.945 1.857c0 .705-.422 1.323-1.044 1.637zm4.104 1.493c.043-.063.083-.129.123-.194a5.653 5.653 0 0 0 .526-1.103a5.56 5.56 0 0 0 .11-.362c.02-.076.042-.15.06-.227a5.58 5.58 0 0 0 .073-.41c.01-.068.025-.134.032-.203c.024-.207.038-.417.038-.63c0-3.198-2.687-5.763-5.967-5.763H7.286v14.572h4.022v-3.048h1.154c1.43 0 2.747-.488 3.778-1.303a5.92 5.92 0 0 0 .46-.406c.035-.034.066-.07.1-.105c.107-.11.21-.22.308-.337c.044-.053.084-.108.126-.162c.081-.104.16-.21.233-.319zm-5.005 1.775H10.45v3.048H8.143V5.57h4.319c2.837 0 5.11 2.211 5.11 4.905s-2.273 4.905-5.11 4.905z"/>
      </svg>
    ),
    description: 'Tech professional network & launchpad.'
  },
  {
    name: 'X',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
        <path fill="currentColor" d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05L9.294 6.928ZM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843l-3.664-5.28Z"/>
      </svg>
    ),
    description: 'Build in public & go viral.'
  },
  {
    name: 'Hacker News',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 464 488">
        <path fill="currentColor" d="M2 2v460h460V2H2zm250 265v113h-40V267L111 68h47l74 150l76-150h45z"/>
      </svg>
    ),
    description: 'Honest feedback from tech experts.'
  },
  {
    name: 'TikTok',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07z"/>
      </svg>
    ),
    description: 'Viral short-form content for massive reach.'
  },
  {
    name: 'Threads',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill=" currentColor" d="M17.743 11.123a8.547 8.547 0 0 0-.315-.142c-.185-3.414-2.05-5.368-5.182-5.388h-.042c-1.874 0-3.431.8-4.39 2.255l1.722 1.181c.716-1.087 1.84-1.319 2.669-1.319h.028c1.031.007 1.81.307 2.313.892c.367.425.612 1.014.733 1.756a13.176 13.176 0 0 0-2.96-.143c-2.977.172-4.892 1.908-4.763 4.321c.065 1.224.675 2.277 1.717 2.965c.88.582 2.015.866 3.195.802c1.557-.086 2.778-.68 3.63-1.766c.648-.825 1.057-1.894 1.238-3.241c.742.448 1.292 1.037 1.596 1.745c.517 1.205.547 3.184-1.068 4.797c-1.415 1.414-3.116 2.025-5.686 2.044c-2.851-.02-5.008-.935-6.41-2.717c-1.313-1.67-1.991-4.08-2.016-7.165c.025-3.085.703-5.496 2.016-7.165c1.402-1.782 3.558-2.696 6.41-2.717c2.871.02 5.065.94 6.521 2.73c.714.879 1.252 1.983 1.607 3.27l2.018-.538c-.43-1.585-1.107-2.95-2.027-4.083C18.43 1.2 15.7.024 12.185 0h-.014C8.66.024 5.963 1.205 4.15 3.51c-1.614 2.05-2.466 4.905-2.474 8.482v.016c.028 3.578.86 6.431 2.473 8.482c1.813 2.305 4.512 3.486 8.022 3.51h.014c3.12-.022 5.319-.839 7.13-2.649c2.371-2.368 2.3-5.336 1.518-7.158c-.56-1.307-1.629-2.368-3.09-3.07zm-5.387 5.065c-1.305.074-2.66-.512-2.728-1.766c-.05-.93.662-1.969 2.808-2.092c.246-.015.487-.021.724-.021c.78 0 1.508.075 2.171.22c-.247 3.088-1.697 3.59-2.975 3.66z"/>
      </svg>
    ),
    description: 'Real-time updates & tech community.'
  },
 
 
 
  {
    name: 'LinkedIn',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20">
        <path fill="currentColor" d="M17.04 17.043h-2.962v-4.64c0-1.107-.023-2.531-1.544-2.531c-1.544 0-1.78 1.204-1.78 2.449v4.722H7.793V7.5h2.844v1.3h.039c.397-.75 1.364-1.54 2.808-1.54c3.001 0 3.556 1.974 3.556 4.545v5.238ZM4.447 6.194c-.954 0-1.72-.771-1.72-1.72s.767-1.72 1.72-1.72a1.72 1.72 0 0 1 0 3.44Zm1.484 10.85h-2.97V7.5h2.97v9.543ZM18.521 0H1.476C.66 0 0 .645 0 1.44v17.12C0 19.355.66 20 1.476 20h17.042c.815 0 1.482-.644 1.482-1.44V1.44C20 .646 19.333 0 18.518 0h.003Z"/>
      </svg>
    ),
    description: 'B2B reach & founder storytelling.'
  },
  {
    name: 'Indie Hackers',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="M0 0h24v24H0zm5.4 17.2h2.4V6.8H5.4zm4.8 0h2.4v-4h3.6v4h2.4V6.8h-2.4v4h-3.6v-4h-2.4z"/>
      </svg>
    ),
    description: 'Founder community & milestone sharing.'
  },
  {
    name: 'DevHunt',
    icon: (
      <svg width="24" height="24" viewBox="0 0 851 107" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M35.542 30.5714C52.191 15.1556 75.5192 0.0305717 102.985 0L106.809 3.82143C106.84 31.4352 91.7479 54.784 76.3359 71.4299V103.179L72.5191 107H49.6183L46.9235 105.884L39.2977 98.2488L39.2289 98.241L8.69452 67.6696L8.68674 67.6012L1.12211 60.0267L0 57.3214V34.3929L3.81679 30.5714H35.542ZM27.809 38.2143H7.63359V55.7467L10.8241 58.9261C15.97 51.614 21.6472 44.6915 27.809 38.2143ZM47.9389 96.1244L51.145 99.3571H68.664V79.1878C62.1846 85.3399 55.2572 91.0011 47.9389 96.1244ZM76.1182 39.7929C76.7122 42.7755 76.0988 45.8727 74.4121 48.4023H74.4044C72.7183 50.9309 70.0974 52.6851 67.1189 53.2793C64.1404 53.8735 61.0487 53.2587 58.5226 51.5701C55.9972 49.8814 54.245 47.2578 53.6516 44.2757C53.0581 41.2936 53.6721 38.1981 55.3587 35.6691C57.0453 33.1394 59.6663 31.384 62.6453 30.7893C65.6244 30.1945 68.7178 30.8088 71.2443 32.4974C73.7709 34.1861 75.5242 36.8102 76.1182 39.7929Z" fill="currentColor"/>
        <path d="M22.9008 99.3571V107H0V84.0714H7.63359V99.3571H22.9008Z" fill="currentColor"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M207.693 5.3349C200.743 2.62384 192.618 1.26831 183.32 1.26831H146.126V104.896H183.32C192.618 104.896 200.743 103.447 207.693 100.549C214.643 97.6512 220.42 93.7715 225.022 88.9103C229.624 84.0491 233.052 78.627 235.307 72.644C237.655 66.6609 238.829 60.5844 238.829 54.4144V51.3294C238.829 44.879 237.655 38.6622 235.307 32.6792C233.052 26.6027 229.624 21.2273 225.022 16.5531C220.42 11.7853 214.643 8.04596 207.693 5.3349ZM198.817 22.0219C194.685 20.5262 189.941 19.7783 184.588 19.7783H166.132V86.3862H184.588C189.941 86.3862 194.685 85.5916 198.817 84.0024C203.044 82.3196 206.613 79.9825 209.525 76.991C212.436 73.9995 214.643 70.4938 216.146 66.474C217.743 62.3606 218.541 57.8266 218.541 52.8719C218.541 47.7303 217.743 43.1495 216.146 39.1297C214.643 35.0163 212.436 31.5106 209.525 28.6126C206.613 25.7146 203.044 23.5177 198.817 22.0219Z" fill="currentColor"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M289.429 107C282.854 107 277.078 105.878 272.1 103.634C267.216 101.391 263.13 98.399 259.843 94.6596C256.649 90.8268 254.207 86.5732 252.517 81.899C250.92 77.2247 250.122 72.457 250.122 67.5958V64.9315C250.122 59.8833 250.92 55.0221 252.517 50.3478C254.207 45.5801 256.649 41.3733 259.843 37.7274C263.13 33.988 267.169 31.0432 271.959 28.8931C276.749 26.6494 282.29 25.5276 288.583 25.5276C296.849 25.5276 303.752 27.3506 309.293 30.9965C314.929 34.5489 319.155 39.2699 321.973 45.1594C324.791 50.9555 326.2 57.219 326.2 63.9499V70.9612H268.691C269.026 73.8992 269.692 76.6103 270.691 79.0944C272.194 82.7403 274.495 85.6384 277.594 87.7885C280.694 89.8452 284.638 90.8735 289.429 90.8735C294.219 90.8735 298.116 89.9387 301.122 88.069C304.128 86.1058 306.053 83.7219 306.898 80.9174H324.932C323.805 86.1525 321.644 90.7333 318.451 94.6596C315.258 98.586 311.172 101.624 306.194 103.774C301.31 105.925 295.721 107 289.429 107ZM270.691 53.1524C269.955 54.9365 269.4 56.8997 269.024 59.0419H307.493C307.147 56.6177 306.573 54.4208 305.771 52.4512C304.362 48.9923 302.202 46.328 299.291 44.4583C296.473 42.5886 292.904 41.6537 288.583 41.6537C284.263 41.6537 280.6 42.6353 277.594 44.5985C274.589 46.5617 272.287 49.413 270.691 53.1524Z" fill="currentColor"/>
        <path d="M333.277 28.1919L357.227 104.335H388.645L409.355 28.1919H390.476L374.893 88.3494H371.567L353.424 28.1919H333.277Z" fill="currentColor"/>
        <path d="M542.459 98.0251C547.343 103.821 554.199 106.719 563.028 106.719H563.873C569.79 106.719 574.721 105.41 578.666 102.793C582.611 100.175 585.57 96.2956 587.542 91.154C588.087 89.7336 588.557 88.2169 588.951 86.604V104.335H604.448V28.0517H584.865V73.0647C584.865 78.0193 583.409 81.9457 580.498 84.8437C577.68 87.7418 574.017 89.1908 569.509 89.1908C565 89.1908 561.431 87.8353 558.801 85.1242C556.172 82.3196 554.857 78.5803 554.857 73.906V28.0517H535.274V72.2233C535.274 83.6284 537.669 92.229 542.459 98.0251Z" fill="currentColor"/>
        <path d="M650.894 47.8237C647.983 50.7218 646.527 54.6481 646.527 59.6028V104.335H626.944V28.1919H642.441V46.9556C642.895 45.0026 643.459 43.1886 644.132 41.5135C646.198 36.2784 649.251 32.352 653.289 29.7344C657.422 27.1169 662.541 25.8081 668.646 25.8081H669.491C678.602 25.8081 685.505 28.7528 690.201 34.6424C694.897 40.4384 697.245 49.1325 697.245 60.7247V104.335H677.662V59.0419C677.662 54.3677 676.301 50.5815 673.577 47.6835C670.947 44.7855 667.284 43.3365 662.588 43.3365C657.798 43.3365 653.9 44.8322 650.894 47.8237Z" fill="currentColor"/>
        <path d="M734.078 102.653C738.68 104.429 744.504 105.317 751.548 105.317H762.537V88.6299H750.562C746.805 88.6299 743.893 87.6483 741.827 85.6851C739.855 83.6284 738.868 80.7304 738.868 76.991L738.938 42.4951H762.537V28.1919H738.966L739.009 6.73717H720.694L720.65 28.1919H708.437V42.4951H720.621L720.553 75.729C720.553 83.1143 721.68 89.0038 723.935 93.3976C726.189 97.6979 729.57 100.783 734.078 102.653Z" fill="currentColor"/>
        <path d="M493.18 104.335V61.8465H445.701V104.335H425.696V1.96945H445.701V44.3181H493.18V1.96945H513.185V104.335H493.18Z" fill="currentColor"/>
        <rect x="788" y="89.2937" width="62" height="16" fill="#FF7516"/>
      </svg>
    ),
    description: 'Launch platform for dev tools & APIs.'
  },
  {
    name: "There's An AI For That",
    icon: (
      <img 
        src="https://theresanaiforthat.com/favicon-large.png" 
        alt="There's An AI For That" 
        width="24" 
        height="24" 
        style={{ borderRadius: '4px' }}
      />
    ),
    description: 'AI tool discovery & launches.'
  },
  {
    name: 'LaunchFast',
    icon: (
      <img 
        src="https://ik.imagekit.io/vjeqenuhn/launchfast-website/purple-icon.png" 
        alt="LaunchFast" 
        width="24" 
        height="24" 
        style={{ borderRadius: '4px' }}
      />
    ),
    description: 'Fast MVP launches & journey sharing.'
  },
  {
    name: 'TinyLaunch',
    icon: (
      <img 
        src="https://www.tinylaun.ch/icon.png" 
        alt="TinyLaunch" 
        width="24" 
        height="24" 
        style={{ borderRadius: '4px' }}
      />
    ),
    description: 'Quick idea validation & feedback.'
  }
];

export const getPlatformDetails = (name: string): PlatformDetails => {
  const details: { [key: string]: PlatformDetails } = {
    'Reddit': {
      howToShare: 'Engage authentically in niche subreddits, share insights, and subtly promote to avoid bans.',
      community: 'r/startups, r/SideProject, r/Entrepreneur, r/sideprojects',
      link: 'https://reddit.com'
    },
    'Product Hunt': {
      howToShare: 'Launch at 2:30 AM PT, tell a compelling story, and actively seek feedback.',
      community: 'Product Hunt makers & early adopters',
      link: 'https://producthunt.com'
    },
    'Peerlist': {
      howToShare: 'Schedule projects before Monday—it\'s launch day!  Then, post a quick update about them in your scroll.',
      community: 'Tech professionals & startup founders',
      link: 'https://peerlist.io/mdanassaif/signup'
    },
    'Hacker News': {
      howToShare: 'Post technical Show HN content, stay humble, and avoid overt self-promotion.',
      community: 'Tech experts & developers',
      link: 'https://news.ycombinator.com'
    },
    'X': {
      howToShare: 'Tweet #BuildInPublic updates with visuals, tag influencers, join trending startup threads.',
      community: 'Tech Twitter, #StartupTwitter, #BuildInPublic',
      link: 'https://x.com'
    },
    'TikTok': {
      howToShare: 'Craft quirky behind-the-scenes videos with trending sounds to hook #TechTok viewers.',
      community: 'TechTok, #StartupTok, #SmallBusiness',
      link: 'https://tiktok.com'
    },
    'Threads': {
      howToShare: 'Post real-time updates, use polls, and tag tech communities for engagement.',
      community: 'Tagged BuildInPublic & Based on your project, you can tag the community',
      link: 'https://threads.net'
    },
    'LinkedIn': {
      howToShare: 'Share polished founder stories, tag investors, and use articles to showcase expertise.',
      community: 'B2B professionals & investors',
      link: 'https://linkedin.com'
    },
    'Indie Hackers': {
      howToShare: 'Post raw revenue and struggles in milestones to spark bootstrappers’ discussions.',
      community: 'Indie founders & bootstrappers',
      link: 'https://indiehackers.com'
    },
    'DevHunt': {
      howToShare: 'Submit polished dev tools with demos, highlight open-source for developer credibility.',
      community: 'Developer community & tool hunters',
      link: 'https://devhunt.org'
    },
    "There's An AI For That": {
      howToShare: 'Submit AI tools with catchy demo videos, highlight unique use cases.',
      community: 'AI enthusiasts & tool hunters',
      link: 'https://theresanaiforthat.com'
    },
    'LaunchFast': {
      howToShare: 'Share MVP’s origin story, post rapid updates, and invite early adopter feedback.',
      community: 'Rapid builders & early adopters',
      link: 'https://launchfast.co'
    },
    'TinyLaunch': {
      howToShare: 'Build sleek landing pages, A/B test headlines, and share user testimonials.',
      community: 'Idea validators & early users',
      link: 'https://tinylaun.ch'
    }
  };
  return details[name] || { howToShare: '', community: '', link: '' };
};