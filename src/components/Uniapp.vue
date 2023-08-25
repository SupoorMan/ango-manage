<template>
    <el-row class="context-box">
        <el-col :span="16">1</el-col>
        <el-col :span="8">
            <!--The Main Thing-->
            <div id="wrapper">
                <div class="phone view_1" id="phone_1">
                    <iframe src="https://techbrood.com" id="frame_1"></iframe>
                </div>
            </div>

            <!--Controls etc.-->
            <div id="controls">
                <div>
                    <label for="iframeURL">URL:</label>
                    <input type="text" id="iframeURL" placeholder="https://techbrood.com" value="https://techbrood.com" />
                </div>
                <div>
                    <label for="iframeWidth">Width:</label>
                    <input type="number" id="iframeWidth" placeholder="400" value="400" />
                </div>
                <div>
                    <label for="iframeHeight">Height:</label>
                    <input type="number" id="iframeHeight" placeholder="650" value="650" />
                </div>
                <!--Idea by /u/aerosole-->
                <div>
                    <label for="iframePerspective">Add perspective:</label>
                    <input type="checkbox" id="iframePerspective" checked="true" />
                </div>
            </div>
            <div id="views">
                <button value="1">View 1 - Laying</button>
                <button value="2">View 2 - Side</button>
                <button value="3">View 3 - Front</button>
            </div>
            <div id="linkBack"
                style="position:absolute;right:0px;bottom:0px;background-color:#333;margin:0;width:60px;padding:5px"><a
                    href="https://www.f-rilling.com/projects/" target="_blank"
                    style="font-size:14px;text-decoration:none;color:#fff;padding:0 0 0 5px;font-family:sans-serif">My
                    Site</a>
            </div>
        </el-col>
    </el-row>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
// import type { TabsPaneContext } from 'element-plus'
// import $ from '../util/jquery-1.11.1.min.js'

/*Only needed for the controls*/
// var phone = document.getElementById("phone_1"),
//     iframe = document.getElementById("frame_1");

// /*View*/
// function updateView(view) {
//     if (view) {
//         phone.className = "phone view_" + view;
//     }
// }

// /*Controls*/
// function updateIframe() {
//     iframe.src = document.getElementById("iframeURL").value;

//     phone.style.width = document.getElementById("iframeWidth").value + "px";
//     phone.style.height = document.getElementById("iframeHeight").value + "px";

//     /*Idea by /u/aerosole*/
//     document.getElementById("wrapper").style.perspective = (
//         document.getElementById("iframePerspective").checked ? "1000px" : "none"
//     );
// }
// updateIframe();

// /*Events*/
// document.getElementById("controls").addEventListener("change", function() {
//     updateIframe();
// });

// document.getElementById("views").addEventListener("click", function(evt) {
//     updateView(evt.target.value);
// });
</script>
  
<style scoped>
.context-box {
    height: 100%;
    background-color: antiquewhite;
}

</style>
  