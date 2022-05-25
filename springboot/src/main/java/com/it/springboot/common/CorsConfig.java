package com.it.springboot.common;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig {
//    @Bean
//    public CorsWebFilter corsWebFilter(){
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        CorsConfiguration corsConfiguration = new CorsConfiguration();
//        //允许哪些头跨域
//        corsConfiguration.addAllowedHeader("*");
//        // 允许哪些方式跨域   get  post  delete 等方式
//        corsConfiguration.addAllowedMethod("*");
//        //允许哪些请求来源跨域    *  任意来源
//        corsConfiguration.addAllowedOrigin("*");
//        // 是否允许携带cooker跨域
//        corsConfiguration.setAllowCredentials(true);
//        //注册跨越配置       /**配置请求路径
//        source.registerCorsConfiguration("/**",corsConfiguration);
//        return new CorsWebFilter(source);
//    }
    // 当前跨域请求最大有效时长。这里默认1天
    private static final long MAX_AGE = 24 * 60 * 60;

    private CorsConfiguration buildConfig() {
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.addAllowedOrigin("*"); // 1 设置访问源地址
        corsConfiguration.addAllowedHeader("*"); // 2 设置访问源请求头
        corsConfiguration.addAllowedMethod("*"); // 3 设置访问源请求方法
        corsConfiguration.setMaxAge(MAX_AGE);
        return corsConfiguration;
    }

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", buildConfig()); // 4 对接口配置跨域设置
        return new CorsFilter(source);
    }
}
