package com.example.JWTAuthentication.config;


import com.example.JWTAuthentication.security.JwtAuthenticationFilter;
import com.example.JWTAuthentication.security.JwtAuthenticationPoint;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
public class Securityconfig {

    @Autowired
    private JwtAuthenticationPoint jwtAuthenticationPoint;

    @Autowired
    private JwtAuthenticationFilter jwtAuthenticationFilter;


    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.csrf(csrf -> csrf.disable())
                .cors(cors -> cors.disable())
                .authorizeHttpRequests(auth -> auth.requestMatchers("/home/**").authenticated()
                .requestMatchers("/auth/login").permitAll()
                .anyRequest().authenticated());
        httpSecurity.exceptionHandling(e -> e.authenticationEntryPoint(jwtAuthenticationPoint));
        httpSecurity.sessionManagement(session->session.sessionCreationPolicy(org.springframework.security.config.http.SessionCreationPolicy.STATELESS));
        httpSecurity.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);



        return httpSecurity.build();
    }


}
