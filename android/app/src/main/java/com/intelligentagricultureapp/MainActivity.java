package com.intelligentagricultureapp;

import android.os.Bundle;

import com.baidu.mapapi.SDKInitializer;
import com.facebook.react.ReactActivity;
import com.remobile.toast.RCTToastPackage;
import com.lumin824.chart.ChartPackage;
import com.lumin824.ezviz.EzvizPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.lumin824.baidumap.BaiduMapPackage;
import com.lumin824.baidumap.BaiduMapPackage;
import com.oblador.vectoricons.VectorIconsPackage;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "IntelligentAgricultureApp";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        SDKInitializer.initialize(getApplicationContext());
    }
}
