<<<<<<< HEAD
import {Component, OnInit, AfterViewInit, OnDestroy} from "@angular/core";
=======
import {Component, OnDestroy, ViewChild} from "@angular/core";
import {OnInit} from "@angular/core";
>>>>>>> b1623af9d149426790fbbedacb0e2d85685dd724
import {SearchService} from "../app.search.service";
import {Observable} from "rxjs/Rx";
import {DrupalService} from "../app.drupal.service";
declare var $:any;

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
<<<<<<< HEAD
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  products: Observable<Array<string>>;
=======
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('productList') productList;
  productWidth: number = 250;
  products:any[];
>>>>>>> b1623af9d149426790fbbedacb0e2d85685dd724
  private searchSubscription: any;
  count : number = 0;
      
  constructor(private searchService:SearchService, private drupalService: DrupalService) {

<<<<<<< HEAD
=======

  constructor(private searchService:SearchService) {
    this.products = [{
      id: 1,
      title: 'Research Consul...',
      image: this.dummyImageSrc(),
      type: "blah",
      body: 'Post-ironic wayfarers squid, heirloom truffaut occupy ugh locavore hammock yuccie intelligentsia ' +
      '3 wolf moon aesthetic. Church-key jean shorts vegan, waistcoat chia brooklyn kogi sartorial. Selvage fap' +
      ' chambray poutine direct trade iPhone. Chicharrones synth gentrify, marfa mlkshk meh viral schlitz photo ' +
      'booth biodiesel. Wolf DIY before they sold out, austin actually pop-up portland forage chicharrones. +1 ' +
      'cred pabst squid. Godard photo booth pitchfork tilde 8-bit.',
      field_category: 'Guide',
      field_limitations: 'Post-ironic wayfarers squid, heirloom truffaut occupy ugh locavore hammock yuccie ' +
      'intelligentsia 3 wolf moon aesthetic. Church-key jean shorts vegan, waistcoat chia brooklyn kogi ' +
      'sartorial. Selvage fap chambray poutine direct trade iPhone. Chicharrones synth gentrify, marfa ' +
      'mlkshk meh viral schlitz photo booth biodiesel. Wolf DIY before they sold out, austin actually ' +
      'pop-up portland forage chicharrones. +1 cred pabst squid. Godard photo booth pitchfork tilde 8-bit.',
      field_considerations: 'Post-ironic wayfarers squid, heirloom truffaut occupy ugh locavore hammock ' +
      'yuccie intelligentsia 3 wolf moon aesthetic. Church-key jean shorts vegan, waistcoat chia brooklyn' +
      ' kogi sartorial. Selvage fap chambray poutine direct trade iPhone. Chicharrones synth gentrify, ' +
      'marfa mlkshk meh viral schlitz photo booth biodiesel. Wolf DIY before they sold out, austin actually' +
      ' pop-up portland forage chicharrones. +1 cred pabst squid. Godard photo booth pitchfork tilde 8-bit.',
      field_features: 'Test planning and management (support and consultation or $ service) Load testing ' +
      '(LoadUI) Functional testing (SOAPUI, Cucumber/gerkin, ) Performance testing (Jmeter) Browser and ' +
      'device testing (browserstack) Integration testing Consultation (best practice, tuition, assitance ' +
      'to turn business rules into automated tests) UNICODE testing Accessibility support and WCAG 2.0 ' +
      'compliance User acceptance testing',
      field_eligibility: 'People with money',
      field_requirements: 'Project description and money',
      field_cost: 'Free',
      field_support: 'j.bauer@auckland.ac.nz'
    },
      {
        id: 2,
        title: 'Statistical Support',
        image: this.dummyImageSrc(),
        type: "blah",
        body: 'Post-ironic wayfarers squid, heirloom truffaut occupy ugh locavore hammock yuccie intelligentsia ' +
        '3 wolf moon aesthetic. Church-key jean shorts vegan, waistcoat chia brooklyn kogi sartorial. Selvage fap' +
        ' chambray poutine direct trade iPhone. Chicharrones synth gentrify, marfa mlkshk meh viral schlitz photo ' +
        'booth biodiesel. Wolf DIY before they sold out, austin actually pop-up portland forage chicharrones. +1 ' +
        'cred pabst squid. Godard photo booth pitchfork tilde 8-bit.',
        field_category: 'Guide',
        field_limitations: 'Post-ironic wayfarers squid, heirloom truffaut occupy ugh locavore hammock yuccie ' +
        'intelligentsia 3 wolf moon aesthetic. Church-key jean shorts vegan, waistcoat chia brooklyn kogi ' +
        'sartorial. Selvage fap chambray poutine direct trade iPhone. Chicharrones synth gentrify, marfa ' +
        'mlkshk meh viral schlitz photo booth biodiesel. Wolf DIY before they sold out, austin actually ' +
        'pop-up portland forage chicharrones. +1 cred pabst squid. Godard photo booth pitchfork tilde 8-bit.',
        field_considerations: 'Post-ironic wayfarers squid, heirloom truffaut occupy ugh locavore hammock ' +
        'yuccie intelligentsia 3 wolf moon aesthetic. Church-key jean shorts vegan, waistcoat chia brooklyn' +
        ' kogi sartorial. Selvage fap chambray poutine direct trade iPhone. Chicharrones synth gentrify, ' +
        'marfa mlkshk meh viral schlitz photo booth biodiesel. Wolf DIY before they sold out, austin actually' +
        ' pop-up portland forage chicharrones. +1 cred pabst squid. Godard photo booth pitchfork tilde 8-bit.',
        field_features: 'Test planning and management (support and consultation or $ service) Load testing ' +
        '(LoadUI) Functional testing (SOAPUI, Cucumber/gerkin, ) Performance testing (Jmeter) Browser and ' +
        'device testing (browserstack) Integration testing Consultation (best practice, tuition, assitance ' +
        'to turn business rules into automated tests) UNICODE testing Accessibility support and WCAG 2.0 ' +
        'compliance User acceptance testing', field_eligibility: 'People with money',
        field_requirements: 'Project description and money',
        field_cost: 'Free',
        field_support: 'j.bauer@auckland.ac.nz'
      },
      {
        id: 3,
        title: '3D Printing',
        image: this.dummyImageSrc(),
        type: "blah",
        body: 'Post-ironic wayfarers squid, heirloom truffaut occupy ugh locavore hammock yuccie intelligentsia ' +
        '3 wolf moon aesthetic. Church-key jean shorts vegan, waistcoat chia brooklyn kogi sartorial. Selvage fap' +
        ' chambray poutine direct trade iPhone. Chicharrones synth gentrify, marfa mlkshk meh viral schlitz photo ' +
        'booth biodiesel. Wolf DIY before they sold out, austin actually pop-up portland forage chicharrones. +1 ' +
        'cred pabst squid. Godard photo booth pitchfork tilde 8-bit.',
        field_category: 'Guide',
        field_limitations: 'Post-ironic wayfarers squid, heirloom truffaut occupy ugh locavore hammock yuccie ' +
        'intelligentsia 3 wolf moon aesthetic. Church-key jean shorts vegan, waistcoat chia brooklyn kogi ' +
        'sartorial. Selvage fap chambray poutine direct trade iPhone. Chicharrones synth gentrify, marfa ' +
        'mlkshk meh viral schlitz photo booth biodiesel. Wolf DIY before they sold out, austin actually ' +
        'pop-up portland forage chicharrones. +1 cred pabst squid. Godard photo booth pitchfork tilde 8-bit.',
        field_considerations: 'Post-ironic wayfarers squid, heirloom truffaut occupy ugh locavore hammock ' +
        'yuccie intelligentsia 3 wolf moon aesthetic. Church-key jean shorts vegan, waistcoat chia brooklyn' +
        ' kogi sartorial. Selvage fap chambray poutine direct trade iPhone. Chicharrones synth gentrify, ' +
        'marfa mlkshk meh viral schlitz photo booth biodiesel. Wolf DIY before they sold out, austin actually' +
        ' pop-up portland forage chicharrones. +1 cred pabst squid. Godard photo booth pitchfork tilde 8-bit.',
        field_features: 'Test planning and management (support and consultation or $ service) Load testing ' +
        '(LoadUI) Functional testing (SOAPUI, Cucumber/gerkin, ) Performance testing (Jmeter) Browser and ' +
        'device testing (browserstack) Integration testing Consultation (best practice, tuition, assitance ' +
        'to turn business rules into automated tests) UNICODE testing Accessibility support and WCAG 2.0 ' +
        'compliance User acceptance testing', field_eligibility: 'People with money',
        field_requirements: 'Project description and money',
        field_cost: 'Free',
        field_support: 'j.bauer@auckland.ac.nz'
      },
      {
        id: 4,
        title: 'Auckland Scien...',
        image: this.dummyImageSrc(),
        type: "blah",
        body: 'Post-ironic wayfarers squid, heirloom truffaut occupy ugh locavore hammock yuccie intelligentsia ' +
        '3 wolf moon aesthetic. Church-key jean shorts vegan, waistcoat chia brooklyn kogi sartorial. Selvage fap' +
        ' chambray poutine direct trade iPhone. Chicharrones synth gentrify, marfa mlkshk meh viral schlitz photo ' +
        'booth biodiesel. Wolf DIY before they sold out, austin actually pop-up portland forage chicharrones. +1 ' +
        'cred pabst squid. Godard photo booth pitchfork tilde 8-bit.',
        field_category: 'Guide',
        field_limitations: 'Post-ironic wayfarers squid, heirloom truffaut occupy ugh locavore hammock yuccie ' +
        'intelligentsia 3 wolf moon aesthetic. Church-key jean shorts vegan, waistcoat chia brooklyn kogi ' +
        'sartorial. Selvage fap chambray poutine direct trade iPhone. Chicharrones synth gentrify, marfa ' +
        'mlkshk meh viral schlitz photo booth biodiesel. Wolf DIY before they sold out, austin actually ' +
        'pop-up portland forage chicharrones. +1 cred pabst squid. Godard photo booth pitchfork tilde 8-bit.',
        field_considerations: 'Post-ironic wayfarers squid, heirloom truffaut occupy ugh locavore hammock ' +
        'yuccie intelligentsia 3 wolf moon aesthetic. Church-key jean shorts vegan, waistcoat chia brooklyn' +
        ' kogi sartorial. Selvage fap chambray poutine direct trade iPhone. Chicharrones synth gentrify, ' +
        'marfa mlkshk meh viral schlitz photo booth biodiesel. Wolf DIY before they sold out, austin actually' +
        ' pop-up portland forage chicharrones. +1 cred pabst squid. Godard photo booth pitchfork tilde 8-bit.',
        field_features: 'Test planning and management (support and consultation or $ service) Load testing ' +
        '(LoadUI) Functional testing (SOAPUI, Cucumber/gerkin, ) Performance testing (Jmeter) Browser and ' +
        'device testing (browserstack) Integration testing Consultation (best practice, tuition, assitance ' +
        'to turn business rules into automated tests) UNICODE testing Accessibility support and WCAG 2.0 ' +
        'compliance User acceptance testing', field_eligibility: 'People with money',
        field_requirements: 'Project description and money',
        field_cost: 'Free',
        field_support: 'j.bauer@auckland.ac.nz'
      },
      {
        id: 5,
        title: '3D Visualisatio...',
        type: "blah",
        image: this.dummyImageSrc(),
        body: 'Post-ironic wayfarers squid, heirloom truffaut occupy ugh locavore hammock yuccie intelligentsia ' +
        '3 wolf moon aesthetic. Church-key jean shorts vegan, waistcoat chia brooklyn kogi sartorial. Selvage fap' +
        ' chambray poutine direct trade iPhone. Chicharrones synth gentrify, marfa mlkshk meh viral schlitz photo ' +
        'booth biodiesel. Wolf DIY before they sold out, austin actually pop-up portland forage chicharrones. +1 ' +
        'cred pabst squid. Godard photo booth pitchfork tilde 8-bit.',
        field_category: 'Guide',
        field_limitations: 'Post-ironic wayfarers squid, heirloom truffaut occupy ugh locavore hammock yuccie ' +
        'intelligentsia 3 wolf moon aesthetic. Church-key jean shorts vegan, waistcoat chia brooklyn kogi ' +
        'sartorial. Selvage fap chambray poutine direct trade iPhone. Chicharrones synth gentrify, marfa ' +
        'mlkshk meh viral schlitz photo booth biodiesel. Wolf DIY before they sold out, austin actually ' +
        'pop-up portland forage chicharrones. +1 cred pabst squid. Godard photo booth pitchfork tilde 8-bit.',
        field_considerations: 'Post-ironic wayfarers squid, heirloom truffaut occupy ugh locavore hammock ' +
        'yuccie intelligentsia 3 wolf moon aesthetic. Church-key jean shorts vegan, waistcoat chia brooklyn' +
        ' kogi sartorial. Selvage fap chambray poutine direct trade iPhone. Chicharrones synth gentrify, ' +
        'marfa mlkshk meh viral schlitz photo booth biodiesel. Wolf DIY before they sold out, austin actually' +
        ' pop-up portland forage chicharrones. +1 cred pabst squid. Godard photo booth pitchfork tilde 8-bit.',
        field_features: 'Test planning and management (support and consultation or $ service) Load testing ' +
        '(LoadUI) Functional testing (SOAPUI, Cucumber/gerkin, ) Performance testing (Jmeter) Browser and ' +
        'device testing (browserstack) Integration testing Consultation (best practice, tuition, assitance ' +
        'to turn business rules into automated tests) UNICODE testing Accessibility support and WCAG 2.0 ' +
        'compliance User acceptance testing',
        field_eligibility: 'People with money',
        field_requirements: 'Project description and money',
        field_cost: 'Free',
        field_support: 'j.bauer@auckland.ac.nz'
      },
      {
        id: 6,
        title: '3D Visualisatio...',
        type: "blah",
        image: this.dummyImageSrc(),
        body: 'Post-ironic wayfarers squid, heirloom truffaut occupy ugh locavore hammock yuccie intelligentsia ' +
        '3 wolf moon aesthetic. Church-key jean shorts vegan, waistcoat chia brooklyn kogi sartorial. Selvage fap' +
        ' chambray poutine direct trade iPhone. Chicharrones synth gentrify, marfa mlkshk meh viral schlitz photo ' +
        'booth biodiesel. Wolf DIY before they sold out, austin actually pop-up portland forage chicharrones. +1 ' +
        'cred pabst squid. Godard photo booth pitchfork tilde 8-bit.',
        field_category: 'Guide',
        field_limitations: 'Post-ironic wayfarers squid, heirloom truffaut occupy ugh locavore hammock yuccie ' +
        'intelligentsia 3 wolf moon aesthetic. Church-key jean shorts vegan, waistcoat chia brooklyn kogi ' +
        'sartorial. Selvage fap chambray poutine direct trade iPhone. Chicharrones synth gentrify, marfa ' +
        'mlkshk meh viral schlitz photo booth biodiesel. Wolf DIY before they sold out, austin actually ' +
        'pop-up portland forage chicharrones. +1 cred pabst squid. Godard photo booth pitchfork tilde 8-bit.',
        field_considerations: 'Post-ironic wayfarers squid, heirloom truffaut occupy ugh locavore hammock ' +
        'yuccie intelligentsia 3 wolf moon aesthetic. Church-key jean shorts vegan, waistcoat chia brooklyn' +
        ' kogi sartorial. Selvage fap chambray poutine direct trade iPhone. Chicharrones synth gentrify, ' +
        'marfa mlkshk meh viral schlitz photo booth biodiesel. Wolf DIY before they sold out, austin actually' +
        ' pop-up portland forage chicharrones. +1 cred pabst squid. Godard photo booth pitchfork tilde 8-bit.',
        field_features: 'Test planning and management (support and consultation or $ service) Load testing ' +
        '(LoadUI) Functional testing (SOAPUI, Cucumber/gerkin, ) Performance testing (Jmeter) Browser and ' +
        'device testing (browserstack) Integration testing Consultation (best practice, tuition, assitance ' +
        'to turn business rules into automated tests) UNICODE testing Accessibility support and WCAG 2.0 ' +
        'compliance User acceptance testing',
        field_eligibility: 'People with money',
        field_requirements: 'Project description and money',
        field_cost: 'Free',
        field_support: 'j.bauer@auckland.ac.nz'
      },
      {
        id: 7,
        title: '3D Visualisatio...',
        type: "blah",
        image: this.dummyImageSrc(),
        body: 'Post-ironic wayfarers squid, heirloom truffaut occupy ugh locavore hammock yuccie intelligentsia ' +
        '3 wolf moon aesthetic. Church-key jean shorts vegan, waistcoat chia brooklyn kogi sartorial. Selvage fap' +
        ' chambray poutine direct trade iPhone. Chicharrones synth gentrify, marfa mlkshk meh viral schlitz photo ' +
        'booth biodiesel. Wolf DIY before they sold out, austin actually pop-up portland forage chicharrones. +1 ' +
        'cred pabst squid. Godard photo booth pitchfork tilde 8-bit.',
        field_category: 'Guide',
        field_limitations: 'Post-ironic wayfarers squid, heirloom truffaut occupy ugh locavore hammock yuccie ' +
        'intelligentsia 3 wolf moon aesthetic. Church-key jean shorts vegan, waistcoat chia brooklyn kogi ' +
        'sartorial. Selvage fap chambray poutine direct trade iPhone. Chicharrones synth gentrify, marfa ' +
        'mlkshk meh viral schlitz photo booth biodiesel. Wolf DIY before they sold out, austin actually ' +
        'pop-up portland forage chicharrones. +1 cred pabst squid. Godard photo booth pitchfork tilde 8-bit.',
        field_considerations: 'Post-ironic wayfarers squid, heirloom truffaut occupy ugh locavore hammock ' +
        'yuccie intelligentsia 3 wolf moon aesthetic. Church-key jean shorts vegan, waistcoat chia brooklyn' +
        ' kogi sartorial. Selvage fap chambray poutine direct trade iPhone. Chicharrones synth gentrify, ' +
        'marfa mlkshk meh viral schlitz photo booth biodiesel. Wolf DIY before they sold out, austin actually' +
        ' pop-up portland forage chicharrones. +1 cred pabst squid. Godard photo booth pitchfork tilde 8-bit.',
        field_features: 'Test planning and management (support and consultation or $ service) Load testing ' +
        '(LoadUI) Functional testing (SOAPUI, Cucumber/gerkin, ) Performance testing (Jmeter) Browser and ' +
        'device testing (browserstack) Integration testing Consultation (best practice, tuition, assitance ' +
        'to turn business rules into automated tests) UNICODE testing Accessibility support and WCAG 2.0 ' +
        'compliance User acceptance testing',
        field_eligibility: 'People with money',
        field_requirements: 'Project description and money',
        field_cost: 'Free',
        field_support: 'j.bauer@auckland.ac.nz'
      },
      {
        id: 8,
        title: '3D Visualisatio...',
        type: "blah",
        image: this.dummyImageSrc(),
        body: 'Post-ironic wayfarers squid, heirloom truffaut occupy ugh locavore hammock yuccie intelligentsia ' +
        '3 wolf moon aesthetic. Church-key jean shorts vegan, waistcoat chia brooklyn kogi sartorial. Selvage fap' +
        ' chambray poutine direct trade iPhone. Chicharrones synth gentrify, marfa mlkshk meh viral schlitz photo ' +
        'booth biodiesel. Wolf DIY before they sold out, austin actually pop-up portland forage chicharrones. +1 ' +
        'cred pabst squid. Godard photo booth pitchfork tilde 8-bit.',
        field_category: 'Guide',
        field_limitations: 'Post-ironic wayfarers squid, heirloom truffaut occupy ugh locavore hammock yuccie ' +
        'intelligentsia 3 wolf moon aesthetic. Church-key jean shorts vegan, waistcoat chia brooklyn kogi ' +
        'sartorial. Selvage fap chambray poutine direct trade iPhone. Chicharrones synth gentrify, marfa ' +
        'mlkshk meh viral schlitz photo booth biodiesel. Wolf DIY before they sold out, austin actually ' +
        'pop-up portland forage chicharrones. +1 cred pabst squid. Godard photo booth pitchfork tilde 8-bit.',
        field_considerations: 'Post-ironic wayfarers squid, heirloom truffaut occupy ugh locavore hammock ' +
        'yuccie intelligentsia 3 wolf moon aesthetic. Church-key jean shorts vegan, waistcoat chia brooklyn' +
        ' kogi sartorial. Selvage fap chambray poutine direct trade iPhone. Chicharrones synth gentrify, ' +
        'marfa mlkshk meh viral schlitz photo booth biodiesel. Wolf DIY before they sold out, austin actually' +
        ' pop-up portland forage chicharrones. +1 cred pabst squid. Godard photo booth pitchfork tilde 8-bit.',
        field_features: 'Test planning and management (support and consultation or $ service) Load testing ' +
        '(LoadUI) Functional testing (SOAPUI, Cucumber/gerkin, ) Performance testing (Jmeter) Browser and ' +
        'device testing (browserstack) Integration testing Consultation (best practice, tuition, assitance ' +
        'to turn business rules into automated tests) UNICODE testing Accessibility support and WCAG 2.0 ' +
        'compliance User acceptance testing',
        field_eligibility: 'People with money',
        field_requirements: 'Project description and money',
        field_cost: 'Free',
        field_support: 'j.bauer@auckland.ac.nz'
      },
      {
        id: 9,
        title: '3D Visualisatio...',
        image: this.dummyImageSrc(),
        type: "blah",
        body: 'Post-ironic wayfarers squid, heirloom truffaut occupy ugh locavore hammock yuccie intelligentsia ' +
        '3 wolf moon aesthetic. Church-key jean shorts vegan, waistcoat chia brooklyn kogi sartorial. Selvage fap' +
        ' chambray poutine direct trade iPhone. Chicharrones synth gentrify, marfa mlkshk meh viral schlitz photo ' +
        'booth biodiesel. Wolf DIY before they sold out, austin actually pop-up portland forage chicharrones. +1 ' +
        'cred pabst squid. Godard photo booth pitchfork tilde 8-bit.',
        field_category: 'Guide',
        field_limitations: 'Post-ironic wayfarers squid, heirloom truffaut occupy ugh locavore hammock yuccie ' +
        'intelligentsia 3 wolf moon aesthetic. Church-key jean shorts vegan, waistcoat chia brooklyn kogi ' +
        'sartorial. Selvage fap chambray poutine direct trade iPhone. Chicharrones synth gentrify, marfa ' +
        'mlkshk meh viral schlitz photo booth biodiesel. Wolf DIY before they sold out, austin actually ' +
        'pop-up portland forage chicharrones. +1 cred pabst squid. Godard photo booth pitchfork tilde 8-bit.',
        field_considerations: 'Post-ironic wayfarers squid, heirloom truffaut occupy ugh locavore hammock ' +
        'yuccie intelligentsia 3 wolf moon aesthetic. Church-key jean shorts vegan, waistcoat chia brooklyn' +
        ' kogi sartorial. Selvage fap chambray poutine direct trade iPhone. Chicharrones synth gentrify, ' +
        'marfa mlkshk meh viral schlitz photo booth biodiesel. Wolf DIY before they sold out, austin actually' +
        ' pop-up portland forage chicharrones. +1 cred pabst squid. Godard photo booth pitchfork tilde 8-bit.',
        field_features: 'Test planning and management (support and consultation or $ service) Load testing ' +
        '(LoadUI) Functional testing (SOAPUI, Cucumber/gerkin, ) Performance testing (Jmeter) Browser and ' +
        'device testing (browserstack) Integration testing Consultation (best practice, tuition, assitance ' +
        'to turn business rules into automated tests) UNICODE testing Accessibility support and WCAG 2.0 ' +
        'compliance User acceptance testing',
        field_eligibility: 'People with money',
        field_requirements: 'Project description and money',
        field_cost: 'Free',
        field_support: 'j.bauer@auckland.ac.nz'
      },
      {
        id: 10,
        title: '3D Visualisatio...',
        image: this.dummyImageSrc(),
        type: "blah",
        body: 'Post-ironic wayfarers squid, heirloom truffaut occupy ugh locavore hammock yuccie intelligentsia ' +
        '3 wolf moon aesthetic. Church-key jean shorts vegan, waistcoat chia brooklyn kogi sartorial. Selvage fap' +
        ' chambray poutine direct trade iPhone. Chicharrones synth gentrify, marfa mlkshk meh viral schlitz photo ' +
        'booth biodiesel. Wolf DIY before they sold out, austin actually pop-up portland forage chicharrones. +1 ' +
        'cred pabst squid. Godard photo booth pitchfork tilde 8-bit.',
        field_category: 'Guide',
        field_limitations: 'Post-ironic wayfarers squid, heirloom truffaut occupy ugh locavore hammock yuccie ' +
        'intelligentsia 3 wolf moon aesthetic. Church-key jean shorts vegan, waistcoat chia brooklyn kogi ' +
        'sartorial. Selvage fap chambray poutine direct trade iPhone. Chicharrones synth gentrify, marfa ' +
        'mlkshk meh viral schlitz photo booth biodiesel. Wolf DIY before they sold out, austin actually ' +
        'pop-up portland forage chicharrones. +1 cred pabst squid. Godard photo booth pitchfork tilde 8-bit.',
        field_considerations: 'Post-ironic wayfarers squid, heirloom truffaut occupy ugh locavore hammock ' +
        'yuccie intelligentsia 3 wolf moon aesthetic. Church-key jean shorts vegan, waistcoat chia brooklyn' +
        ' kogi sartorial. Selvage fap chambray poutine direct trade iPhone. Chicharrones synth gentrify, ' +
        'marfa mlkshk meh viral schlitz photo booth biodiesel. Wolf DIY before they sold out, austin actually' +
        ' pop-up portland forage chicharrones. +1 cred pabst squid. Godard photo booth pitchfork tilde 8-bit.',
        field_features: 'Test planning and management (support and consultation or $ service) Load testing ' +
        '(LoadUI) Functional testing (SOAPUI, Cucumber/gerkin, ) Performance testing (Jmeter) Browser and ' +
        'device testing (browserstack) Integration testing Consultation (best practice, tuition, assitance ' +
        'to turn business rules into automated tests) UNICODE testing Accessibility support and WCAG 2.0 ' +
        'compliance User acceptance testing',
        field_eligibility: 'People with money',
        field_requirements: 'Project description and money',
        field_cost: 'Free',
        field_support: 'j.bauer@auckland.ac.nz'
      },
      {
        id: 11,
        title: '3D Visualisatio...',
        image: this.dummyImageSrc(),
        type: "blah",
        body: 'Post-ironic wayfarers squid, heirloom truffaut occupy ugh locavore hammock yuccie intelligentsia ' +
        '3 wolf moon aesthetic. Church-key jean shorts vegan, waistcoat chia brooklyn kogi sartorial. Selvage fap' +
        ' chambray poutine direct trade iPhone. Chicharrones synth gentrify, marfa mlkshk meh viral schlitz photo ' +
        'booth biodiesel. Wolf DIY before they sold out, austin actually pop-up portland forage chicharrones. +1 ' +
        'cred pabst squid. Godard photo booth pitchfork tilde 8-bit.',
        field_category: 'Guide',
        field_limitations: 'Post-ironic wayfarers squid, heirloom truffaut occupy ugh locavore hammock yuccie ' +
        'intelligentsia 3 wolf moon aesthetic. Church-key jean shorts vegan, waistcoat chia brooklyn kogi ' +
        'sartorial. Selvage fap chambray poutine direct trade iPhone. Chicharrones synth gentrify, marfa ' +
        'mlkshk meh viral schlitz photo booth biodiesel. Wolf DIY before they sold out, austin actually ' +
        'pop-up portland forage chicharrones. +1 cred pabst squid. Godard photo booth pitchfork tilde 8-bit.',
        field_considerations: 'Post-ironic wayfarers squid, heirloom truffaut occupy ugh locavore hammock ' +
        'yuccie intelligentsia 3 wolf moon aesthetic. Church-key jean shorts vegan, waistcoat chia brooklyn' +
        ' kogi sartorial. Selvage fap chambray poutine direct trade iPhone. Chicharrones synth gentrify, ' +
        'marfa mlkshk meh viral schlitz photo booth biodiesel. Wolf DIY before they sold out, austin actually' +
        ' pop-up portland forage chicharrones. +1 cred pabst squid. Godard photo booth pitchfork tilde 8-bit.',
        field_features: 'Test planning and management (support and consultation or $ service) Load testing ' +
        '(LoadUI) Functional testing (SOAPUI, Cucumber/gerkin, ) Performance testing (Jmeter) Browser and ' +
        'device testing (browserstack) Integration testing Consultation (best practice, tuition, assitance ' +
        'to turn business rules into automated tests) UNICODE testing Accessibility support and WCAG 2.0 ' +
        'compliance User acceptance testing',
        field_eligibility: 'People with money',
        field_requirements: 'Project description and money',
        field_cost: 'Free',
        field_support: 'j.bauer@auckland.ac.nz'
      },
      {
        id: 12,
        title: '3D Visualisatio...',
        image: this.dummyImageSrc(),
        type: "blah",
        body: 'Post-ironic wayfarers squid, heirloom truffaut occupy ugh locavore hammock yuccie intelligentsia ' +
        '3 wolf moon aesthetic. Church-key jean shorts vegan, waistcoat chia brooklyn kogi sartorial. Selvage fap' +
        ' chambray poutine direct trade iPhone. Chicharrones synth gentrify, marfa mlkshk meh viral schlitz photo ' +
        'booth biodiesel. Wolf DIY before they sold out, austin actually pop-up portland forage chicharrones. +1 ' +
        'cred pabst squid. Godard photo booth pitchfork tilde 8-bit.',
        field_category: 'Guide',
        field_limitations: 'Post-ironic wayfarers squid, heirloom truffaut occupy ugh locavore hammock yuccie ' +
        'intelligentsia 3 wolf moon aesthetic. Church-key jean shorts vegan, waistcoat chia brooklyn kogi ' +
        'sartorial. Selvage fap chambray poutine direct trade iPhone. Chicharrones synth gentrify, marfa ' +
        'mlkshk meh viral schlitz photo booth biodiesel. Wolf DIY before they sold out, austin actually ' +
        'pop-up portland forage chicharrones. +1 cred pabst squid. Godard photo booth pitchfork tilde 8-bit.',
        field_considerations: 'Post-ironic wayfarers squid, heirloom truffaut occupy ugh locavore hammock ' +
        'yuccie intelligentsia 3 wolf moon aesthetic. Church-key jean shorts vegan, waistcoat chia brooklyn' +
        ' kogi sartorial. Selvage fap chambray poutine direct trade iPhone. Chicharrones synth gentrify, ' +
        'marfa mlkshk meh viral schlitz photo booth biodiesel. Wolf DIY before they sold out, austin actually' +
        ' pop-up portland forage chicharrones. +1 cred pabst squid. Godard photo booth pitchfork tilde 8-bit.',
        field_features: 'Test planning and management (support and consultation or $ service) Load testing ' +
        '(LoadUI) Functional testing (SOAPUI, Cucumber/gerkin, ) Performance testing (Jmeter) Browser and ' +
        'device testing (browserstack) Integration testing Consultation (best practice, tuition, assitance ' +
        'to turn business rules into automated tests) UNICODE testing Accessibility support and WCAG 2.0 ' +
        'compliance User acceptance testing',
        field_eligibility: 'People with money',
        field_requirements: 'Project description and money',
        field_cost: 'Free',
        field_support: 'j.bauer@auckland.ac.nz'
      }];
  }

  getColClasses() {
    let productsPerRow = this.getMaxProducts();
    let gridWidth = Math.ceil(12 / productsPerRow);
    return "s" + gridWidth + " m" + gridWidth + " l" + gridWidth;
  }

  getMaxProducts()
  {
    let numProducts = this.productList.nativeElement.offsetWidth / this.productWidth;
    return Math.max(Math.min(Math.floor(numProducts), 12), 1);
  }

  dummyImageSrc()
  {
    let rand = 1;

    for(let i = 0; i < 5; i++)
    {
      rand *= Math.random();
    }

    return "http://lorempixel.com/160/160/business?dummy=".concat(rand.toString());
  }

  getAbstract(text) {
    var maxWords = 10;
    return text.split(" ").splice(0, maxWords).join(" ") + "...";
>>>>>>> b1623af9d149426790fbbedacb0e2d85685dd724
  }

  ngOnInit() {
    this.searchSubscription = this.searchService.searchChange.subscribe((value) => {
      console.log('Search value: ' + value);
    });

    $(document).ready(function(){
      $('.parallax').parallax();
    });

    this.products = this.drupalService.frontsearch('', this.searchService.searchChange);
  }
  IncCounter()
  {
      this.count=this.count+1;
  }
  getCounter()
  {
      return this.count;
  }
  resetCounter()
  {
      this.count=0;
  }
  ngOnDestroy()
  {
    console.log('destroy');
    this.searchSubscription.unsubscribe();
  }

  ngAfterViewInit()
  {
    window.scrollTo(0,0);
    this.searchService.findAll();
  }
}