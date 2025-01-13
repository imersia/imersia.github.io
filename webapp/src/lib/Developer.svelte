<script lang="ts">
    import { Container, Table, Table_Row, Table_Body, Table_Col, Link, Icon, Column, Text } from "svelte-fomantic-ui";

    export let page = "start";
</script>

<Container ui grid style="padding-top:50px;min-height:200px;padding-bottom:50px;">
    <Column sixteen wide centered>
        <Text ui big>Developer Resources.</Text>
    </Column>
    <Table ui inverted centered huge>
        <Table_Body>
            <Table_Row>
                <Table_Col right aligned>Bitbucket <Icon ui bitbucket/></Table_Col>
                <Table_Col><Link href="https://bitbucket.org/imersiageneral/cloud-mixed-reality-server-erlang-rel/wiki/Home" target="_blank">https://bitbucket.org/imersiageneral/cloud-mixed-reality-server-erlang-rel/wiki/Home</Link></Table_Col>
            </Table_Row>
            <Table_Row>
                <Table_Col right aligned>Head Developer <Icon ui running/></Table_Col>
                <Table_Col><Link href="mailto:contact@reality2.ai?subject=Making contact">Dr. Roy C. Davies</Link></Table_Col>
            </Table_Row>
        </Table_Body>
    </Table>
</Container>