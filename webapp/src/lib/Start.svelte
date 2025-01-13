<script lang="ts">
    import { Container, Image, Column, Text, Row, Divider, Button, Icon } from "svelte-fomantic-ui";

    import imersialogo from "../assets/logos/ImeriaBeingThereMatters.png";
    import colorface from "../assets/hero/color-face.jpg";

    export let page = "start";

    export let allImages: any;
    
</script>
<Container ui grid stackable style="padding-top:50px;padding-bottom:0px;vertical-align:top;">
    <Row>
        <Column seven wide>
            <Image ui src={imersialogo}/>
        </Column>
        <Column nine wide justified style="border-top: 1px solid #4B6E8F; border-bottom: 1px solid #4B6E8F; padding-top: 20px; padding-bottom: 20px;">
            <Text ui large>Imersia is a trailblazer in geospatial gaming, launching at the dawn of cloud computing and the early days of smartphones. Its proprietary GeoSpatial Gaming Server remains unmatched in capability and innovation. This cutting-edge platform is available for licensing and use. Explore this site to learn more.</Text>
        </Column>
    </Row>
    <Row>
        <Column sixteen wide style="position: block;">
            <Image ui src={colorface}/>
        </Column>
    </Row>
</Container>
