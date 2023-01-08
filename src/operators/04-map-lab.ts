import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const texto = document.createElement('div');

texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis rutrum dui, vel mattis dolor. Praesent aliquet iaculis auctor. Sed magna mauris, finibus lobortis posuere quis, pulvinar vel tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel diam pulvinar, fringilla odio in, gravida risus. Quisque feugiat maximus lorem vel rhoncus. In vel enim fermentum, dictum libero convallis, gravida nisi.
<br/><br/>
Cras et lacus diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam felis magna, maximus id ante sed, porta mollis erat. Curabitur non venenatis ante, non tempor felis. Donec vel dolor rhoncus orci consectetur pellentesque. Morbi vel enim libero. Ut malesuada nunc nec metus tempus iaculis.
<br/><br/>
Morbi elementum convallis venenatis. Vestibulum condimentum sem nunc, a ornare turpis lacinia sit amet. Mauris interdum pharetra urna, quis mattis libero facilisis sed. Etiam vulputate purus sit amet dolor porta rutrum. Donec pharetra consectetur felis ut sodales. Fusce nec dapibus nibh. Nullam et dictum felis, vel aliquet nulla. Maecenas sed aliquam risus. Duis finibus libero imperdiet nulla cursus sollicitudin. Duis quis vulputate mi. Sed pharetra sollicitudin consequat. Aenean a turpis felis. Integer placerat dui vel hendrerit ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris tempor dolor quis ligula dapibus scelerisque. Suspendisse vel nunc in nisl rutrum ornare quis quis quam.
<br/><br/>
Pellentesque ante justo, efficitur eu imperdiet eget, rutrum ac odio. Mauris mattis dolor id porttitor hendrerit. Nam efficitur diam vestibulum purus sollicitudin rutrum. Vivamus tincidunt pellentesque neque. Nunc id massa sit amet eros aliquam rutrum nec nec quam. Maecenas imperdiet tortor non felis pharetra tincidunt. In eleifend consequat metus, et maximus dolor fermentum vitae. Vivamus non placerat leo.
<br/><br/>
Phasellus eu ultricies tellus, quis blandit ante. Nam nibh libero, pharetra quis consequat eu, tincidunt vel erat. Sed sed velit neque. Curabitur dapibus, justo sit amet dictum molestie, risus sem venenatis eros, nec posuere massa risus sit amet sapien. Aliquam nec mattis arcu. Donec a dapibus augue. Donec vulputate felis ut pretium ornare. Phasellus ornare diam at lectus posuere, in porttitor lorem lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus urna tortor, hendrerit at molestie vitae, placerat ac nunc. Etiam vulputate quam porta, tempus nunc vel, tristique enim. Etiam viverra sem sed dictum suscipit. Integer lobortis hendrerit mauris, sed sollicitudin risus varius ac. Donec eros metus, interdum rutrum rhoncus eget, aliquet non purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus dictum enim eu nisi dignissim, at iaculis arcu placerat.
`;

const body = document.querySelector('body');

body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class','progress-bar')

body.append(progressBar)

const calculateScrollPercentage = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
     } = event.target.documentElement;

     console.log({scrollTop, scrollHeight, clientHeight});

     return (scrollTop / (scrollHeight - clientHeight) * 100)
     
}

//Streams
const scroll$ = fromEvent(document,'scroll');

// scroll$.subscribe(console.log)

const progress$ = scroll$.pipe(
    map(calculateScrollPercentage),
    tap(console.log)
)

progress$.subscribe(percentage => {
    progressBar.style.width = `${percentage}%`;
})













