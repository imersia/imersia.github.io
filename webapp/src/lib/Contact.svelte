<script lang="ts">
    import { Container, Table, Table_Row, Table_Body, Table_Col, Link, Icon, Column, Text, Divider, Image } from "svelte-fomantic-ui";
    import contact from "../assets/contact.jpg";

    export let page = "start";
</script>

<Container ui grid style="padding-top:50px;min-height:200px;padding-bottom:50px;">
    <Column sixteen wide centered>
        <Text ui big>Contact</Text>
    </Column>
    <Column sixteen wide justified>
        <Divider ui/>
    </Column>
    <Column sixteen wide justified>
        <Image ui src={contact}/>
    </Column>
    <Column sixteen wide justified>
        <Table ui inverted centered huge>
            <Table_Body>
                <Table_Row>
                    <Table_Col right aligned>Lead Developer <Icon ui code/></Table_Col>
                    <Table_Col><Link href="mailto:roy@imersia.com?subject=Making contact">Dr. Roy C. Davies</Link></Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col right aligned>Lead Strategist <Icon ui running/></Table_Col>
                    <Table_Col><Link href="mailto:jon@imersia.com?subject=Making contact">Jon Lowther</Link></Table_Col>
                </Table_Row>
            </Table_Body>
        </Table>
    </Column>
</Container>
