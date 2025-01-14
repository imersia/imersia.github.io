<script lang="ts">
    import { Container, Image, Table, Table_Row, Table_Body, Table_Col, Link, Icon, Column, Text, Divider } from "svelte-fomantic-ui";
    import resources from "../assets/resources.jpg";

    export let page = "start";


</script>

<Container ui grid style="padding-top:50px;min-height:200px;padding-bottom:50px;">
    <Column sixteen wide centered>
        <Text ui big>Resources</Text>
    </Column>
    <Column sixteen wide justified>
        <Divider ui/>
        <Text ui large>
            The Imersia Mixed Reality Server is programmed in Erlang.  Erlang’s real-time engine offers scalability, fault tolerance, and low latency, making it perfect for Imersia’s interactive and dynamic experiences. With seamless distribution, hot code swapping, and efficient memory use, Erlang ensures high performance and resilience, even under heavy loads. Combined with Imersia’s RESTful API and Websockets, it provides a reliable, scalable solution for real-time engagement at scale.    
        </Text>
    </Column>
    <Column sixteen wide justified>
        <Image ui src={resources}/>
    </Column>
    <Column sixteen wide justified>
        <Text ui large>
            Client Apps can be built using your favorite tool.  Our interactive GeoSpatail gaming Apps (Android and iOS) use <Link href="https://www.unity.com" target="_blank">Unity</Link>, whilst our mobile WebApps and Dashboards use <Link href="https://react.dev/" target="_blank">React</Link> (though now we would receommend <Link href="https://svelte.dev/" target="_blank">Svelte</Link>).  All modern App and WebApp languages can work with <Link href="https://restfulapi.net/" target="_blank">RESTful APIs</Link> and most can work with <Link href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" target="_blank">Websockets</Link> such as with Imersia.  Even small devices like <Link href="https://www.arduino.cc/" target="_blank">Arduino Developer Boards</Link> can send data from sensors to an Imersia Mixed Reality Server.
        </Text>
    </Column>
    <Column sixteen wide justified>
        <Table ui inverted centered huge>
            <Table_Body>
                <Table_Row>
                    <Table_Col right aligned>Documentation&nbsp;<Icon ui file/></Table_Col>
                    <Table_Col><Link href="https://bitbucket.org/imersiageneral/cloud-mixed-reality-server-erlang-rel/wiki/Home" target="_blank">https://bitbucket.org/imersiageneral/cloud-mixed-reality-server-erlang-rel/wiki/Home</Link></Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col right aligned>Release Version&nbsp;<Icon ui running/></Table_Col>
                    <Table_Col><Link href="https://bitbucket.org/imersiageneral/cloud-mixed-reality-server-erlang-rel/src/master/" target="_blank">https://bitbucket.org/imersiageneral/cloud-mixed-reality-server-erlang-rel/src/master/</Link></Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col right aligned>RESTful API&nbsp;<Icon ui code branch/></Table_Col>
                    <Table_Col><Link href="https://bitbucket.org/imersiageneral/cloud-mixed-reality-server-erlang-rel/src/master/STARTHERE/Documentation/API%20COMMANDS.md" target="_blank">.../STARTHERE/Documentation/API%20COMMANDS.md</Link></Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col right aligned>Websockets&nbsp;<Icon ui plug/></Table_Col>
                    <Table_Col><Link href="https://bitbucket.org/imersiageneral/cloud-mixed-reality-server-erlang-rel/src/master/STARTHERE/Documentation/WEBSOCKETS.md" target="_blank">.../STARTHERE/Documentation/WEBSOCKETS.md</Link></Table_Col>
                </Table_Row>
            </Table_Body>
        </Table>
    </Column>
    <Column sixteen wide justified>
        <Divider ui/>
        <Text ui large>
            If you are curious about how this website was created, it is a static site created using Svelte, with the graphics library Fomantic UI using the vite framework.  It is hosted on github.io.
        </Text>
    </Column>
    <Column sixteen wide justified>
        <Table ui inverted centered huge>
            <Table_Body>
                <Table_Row>
                    <Table_Col right aligned>Imersia Website <Icon ui globe/></Table_Col>
                    <Table_Col><Link href="https://github.com/imersia/imersia.github.io" target="_blank">https://github.com/imersia/imersia.github.io</Link></Table_Col>
                </Table_Row>
            </Table_Body>
        </Table>
    </Column>
</Container>
