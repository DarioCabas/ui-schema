import React from "react";
import {HeadMeta} from "@control-ui/kit/HeadMeta";
import LiveEditor from '../component/Schema/LiveEditor'

function PageLiveEdit() {
    return <>
        <HeadMeta
            title={'Examples and Live-Editor · UI-Schema'}
            description={'JSON-Schema examples and the rendered UI for it, from simple to conditional combining schemas.'}
        />
        <LiveEditor/>
    </>;
}

export default PageLiveEdit
